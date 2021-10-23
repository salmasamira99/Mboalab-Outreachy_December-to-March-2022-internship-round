import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CoreService } from '../../../../core/core.service';
import { ProfilesService } from '../../../../services/profiles.service';
import { CountriesService } from '../../../../services/countries.service';
import { TimezonesService } from '../../../../services/timezones.service';
import { LanguagesService } from '../../../../services/languages.service';
import { NotificationsService } from '../../../../services/notifications.service';
import { SharedService } from '../../../../services/shared.service';
import { Router, NavigationEnd } from "@angular/router";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import _ from 'lodash';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  public countries: any;
  public languages: any;
  public timezones: any;
  public loadingData = false;
  public loading = false;
  public animationType = 'wanderingCubes';
  public action: string;
  public menu: any;
  public currentTab = "tab1";
  public user: any;
  public userProfile: any;

  public file: any;
  public preview: any;
  public default = 'assets/img/profile-thumb.png';


  constructor(public router: Router,
    public _core: CoreService,
    public profilesService: ProfilesService,
    private datePipe: DatePipe,
    public countriesService: CountriesService,
    public timezonesService: TimezonesService,
    public languagesService: LanguagesService,
    public sharedService: SharedService) { }

  ngOnInit(): void {
    this.menu = this._core.pageMenu;
    this.getCountries();
    this.getTimezones();
    this.getLanguages();
    this.getCurrentUser();
    this.redirectToLogin();
  }
  setAction(action: string) {
    this.action = action;
  }


  async getCountries() {

    this.loadingData = true;
    await this.countriesService
      .getCountries()
      .then(countries => {
        this.countries = this._core.normalizeKeys(countries.countries);
        this.loadingData = false;
      })
      .catch(e => {
        this.loadingData = false;
        this._core.handleError(e);
      });

  }


  async getTimezones() {

    this.loadingData = true;
    await this.timezonesService
      .getTimezones()
      .then(timezones => {
        this.timezones = this._core.normalizeKeys(timezones.timezones);
        this.loadingData = false;
      })
      .catch(e => {
        this.loadingData = false;
        this._core.handleError(e);
      });

  }

  async getLanguages() {

    this.loadingData = true;
    await this.languagesService
      .getLanguages()
      .then(languages => {
        this.languages = this._core.normalizeKeys(languages.languages);
        this.loadingData = false;
      })
      .catch(e => {
        this.loadingData = false;
        this._core.handleError(e);
      });

  }


  setNewLocal(user: any) {

    if (!this._core.isEmptyOrNull(this._core.decryptFromLocalStorage("currentUser"))) {
      let current = this._core.decryptFromLocalStorage("currentUser");;
      current.user = user
      this._core.encryptToLocalStorage('currentUser', JSON.stringify(current));
      this._core.loginUser = current;
    }

  }



  redirectToLogin() {
    if (this.menu != "user" && this.menu != "admin") {
      this._core.showError("Error", "Redirecting to login..")
      this.logout();
    }
  }

  logout() {

    this.loading = true;
    this._core.showSuccess("Success", "Redirecting to login..")
    setTimeout(() => {
      localStorage.clear();
      this.router.navigate(["/login"]);
      this.loading = false;
    }, 3000);

  }

  goToTab(tab) {
    this.currentTab = tab;
  }

  async getCurrentUser() {
    this.loadingData = true;
    if (this._core.loginUser && this._core.loginUser.user) {
      this.user = this._core.loginUser.user;
      if (this.user.profile == '1') {
        this.getUserProfile();
      } else {
        this.loadingData = false;
      }
    }

  }


  async getUserProfile() {

    this.loadingData = true;
    await this.profilesService
      .getUserProfile()
      .then(user => {
        if (user.avatar) {
          this.preview = user.avatar;
        } else {
          this.preview = null;
        }
        this.userProfile = this._core.normalizeKeys(user);
        this.loadingData = false;
      })
      .catch(e => {
        this.loadingData = false;
        //this._core.handleError(e);
      });

  }


  customizeExcelCell = (options: any) => {
    var gridCell = options.gridCell;
    if (!gridCell) {
      return;
    }

    if (gridCell.rowType === "data") {

      if (gridCell.column.dataField === 'createdat') {
        options.value = this.datePipe.transform(gridCell.value, "medium");
      }

    }
  };


}
