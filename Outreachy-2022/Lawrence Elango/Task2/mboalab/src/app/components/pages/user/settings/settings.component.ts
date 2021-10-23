import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CoreService } from '../../../../core/core.service';
import { NotificationsService } from '../../../../services/notifications.service';
import { SharedService } from '../../../../services/shared.service';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { UsersService } from '../../../../services/users.service';
import { PostsService } from '../../../../services/posts.service';
import { ProfilesService } from '../../../../services/profiles.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationEnd } from "@angular/router";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import _ from 'lodash';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @ViewChild('profileModal', { static: false }) profileModal: any;


  @Input() user: any;
  @Input() userProfile: any;
  @Input() countries: any;
  @Input() languages: any;
  @Input() timezones: any;

  closeResult = '';
  public dropdownSettings: any = {
    singleSelection: true,
    idField: '_id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  public countryDropdownSettings: any = {
    singleSelection: true,
    idField: '_id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };

  public timezoneDropdownSettings: any = {
    singleSelection: true,
    idField: '_id',
    textField: 'text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true,
    closeDropDownOnSelection: true
  };


  public action: string;
  public unreadNotificationsCount: any = 0;
  public unreadNotifications: any = [];
  public loadingData = false;
  public loading = false;
  public animationType = 'wanderingCubes';
  public showSaveButton = false;

  public file: any;
  public preview: any;
  public default = 'https://bootdey.com/img/Content/avatar/avatar7.png';

  public postFile: any;
  public postImagePreview: any;
  public postImageDefault = 'assets/img/contact-thumb.jpg';

  public menu: any;
  public currentTab = "tab1";

  public theUser: any;
  public origin = 'profile';
  public profileModalAction = '';

  public countryName: any;
  public languageName: any;
  public timezoneName: any;
  public limit = 10;
  public postCount = 0;


  postForm!: FormGroup;
  profileForm!: FormGroup;

  public selectedCategory = null;
  public selectedCountry = null;
  public selectedTimezone = null;
  public selectedLanguage = null;



  constructor(public _core: CoreService, public router: Router,
    public usersService: UsersService,
    public postsService: PostsService,
    private datePipe: DatePipe,
    public sharedService: SharedService,
    public notificationsService: NotificationsService,
    public profilesService: ProfilesService,
    private fb: FormBuilder, private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.menu = this._core.pageMenu;
    this.initProfileForm();
    this.redirectToLogin();
    this.populateProfileForm();
    this.populateAddressForm();
    //this.getUnreadNotifications();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  initPostForm() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      file: [''],
      content: ['', Validators.required]
    });
  }


  initProfileForm() {
    this.profileForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      username: [''],
      address: [''],
      language: [''],
      country: [''],
      timezone: [''],
      email: [''],
      bio: ['']
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }

  getDate(date: string) {
    if (!this._core.isEmptyOrNull(date)) {
      return this._core.formatDate(date);
    } else {
      return "";
    }
  }

  onSubmitProfile() {

    if (this.profileFormIsValid()) {

      this.loadingData = true;
      let values = this.profileForm.value;
      if (this.action == "updatePersonal") {
        this.updatePersonal(values);
      } else if (this.action == "updateAddress") {
        this.updateAddress(values);
      } else {
        this.loadingData = false;
      }

    }
    return false;

  }

  setAction(action: string) {
    this.action = action;
  }

  postFormIsValid() {

    return this.postForm.controls.title.valid
      && this.postForm.controls.category.valid
      && this.postForm.controls.content.valid
      && this.postFile;

  }

  profileFormIsValid() {

    if (this.action == "updatePersonal") {
      return true;
    } else {
      return true;
    }

  }

  populateProfileForm() {

    if (this.user) {

      this.profileForm.patchValue({
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        username: this.user.username,
      })

    }

  }


  populateAddressForm() {

    if (this.userProfile) {

      if (this.userProfile.country) {
        var selectedCountry = this.countries.filter((country: any) => {
          return this.userProfile.country == country._id;
        });

      }

      if (this.userProfile.timezone) {
        var selectedTimezone = this.timezones.filter((timezone: any) => {
          return this.userProfile.timezone == timezone._id;
        });
      }

      if (this.userProfile.language) {
        var selectedLanguages = this.languages.filter((language: any) => {
          return this.userProfile.language == language._id;
        });
      }

      this.profileForm.patchValue({
        address: this.userProfile.address,
        language: selectedLanguages,
        country: selectedCountry,
        timezone: selectedTimezone,
        bio: this.userProfile.bio
      })

    }

  }



  updatePersonal(values: any) {
    let id = this.user._id;
    this.usersService.updateUser(values, id).then(r => {
      this._core.showSuccess("Success", "Update Successful...");
      this.loadingData = false;
      let obj = {
        type: 'personal',
        id: id
      }
      this.onProfileUpdated(obj);
    }).catch(e => {
      this.loadingData = false;
      this._core.handleError(e);
    });
  }


  updateAddress(values: any) {

    if (!this._core.isEmptyOrNull(this.profileForm.value.country)) {
      values.country = this.selectedCountry;
    }

    if (!this._core.isEmptyOrNull(this.profileForm.value.timezone)) {
      values.timezone = this.selectedTimezone;
    }

    if (!this._core.isEmptyOrNull(this.profileForm.value.language)) {
      values.language = this.selectedLanguage;
    }


    this.profilesService.updateAddress(values).then(r => {
      this._core.showSuccess("Success", "Address updated successfully...");
      this.loadingData = false;
    }).catch(e => {
      this.loadingData = false;
      this._core.handleError(e);
    });

  }



  async getUserProfile() {

    this.loadingData = true;
    await this.profilesService
      .getUserProfile()
      .then(user => {
        this.userProfile = this._core.normalizeKeys(user);
        if (this.userProfile.avatar.contentType && this.userProfile.avatar.data) {
          this.preview = "data:" + this.userProfile.avatar.contentType + ";base64," + this.userProfile.avatar.data;
        } else {
          this.preview = null;
        }
        this.populateAddressForm();
        this.loadingData = false;
      })
      .catch(e => {
        this.loadingData = false;
        this._core.handleError(e);
      });

  }

  getUnreadNotifications() {
    this.loadingData = true;
    this.notificationsService
      .getNotifications()
      .then(notifications => {
        let unreadNotifications = this._core.normalizeKeys(notifications.notifications);
        this.unreadNotifications = unreadNotifications.filter((notification: { read: boolean; }) => {
          return !notification.read;
        });
        this.unreadNotificationsCount = notifications.count;
        this.loadingData = false;
      })
      .catch(e => {
        this.loadingData = false;
        this._core.handleError(e);
      });
  }

  onProfileUpdated(obj: any) {
    if (obj.type == 'personal') {
      this.getUser(obj.id);
    } else if (obj.type == 'address') {
      this.getUserProfile();
    }

  }

  getUser(id: any) {

    this.loadingData = true;
    this.usersService
      .getSingleUser(id)
      .then(user => {
        this.setNewLocal(user);
        this.user = this._core.normalizeKeys(user);
        this.loadingData = false;
        this.populateProfileForm();
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

    this._core.showSuccess("Success", "Redirecting to login..")
    setTimeout(() => {
      localStorage.clear();
      this.router.navigate(["/login"]);
    }, 3000);

  }

  goToTab(tab) {
    this.currentTab = tab;
  }

  public onLanguageSelect(event: any) {
    this.checkLanguageSelection(event);
  }

  public onLanguageDeSelect(event: any) {
    this.profileForm.patchValue({
      country: null
    });
  }

  public checkLanguageSelection(event: any) {

    let value: any = event;
    // get packages and separate with commas
    const selectedLanguage = this.profileForm.value.language;
    this.selectedLanguage = selectedLanguage[0]._id;

    if (selectedLanguage.length == 1) {

      this.profileForm.patchValue({
        language: selectedLanguage
      });
    } else {
      this.profileForm.patchValue({
        language: null
      });
    }
  }

  //category

  public onCategorySelect(event: any) {
    this.checkCategorySelection(event);
  }

  public onCategoryDeSelect(event: any) {
    this.profileForm.patchValue({
      category: null
    });
  }

  public checkCategorySelection(event: any) {

    let value: any = event;
    // get packages and separate with commas
    const selectedCategory = this.profileForm.value.category;
    this.selectedCategory = selectedCategory[0]._id;

    if (selectedCategory.length == 1) {

      this.profileForm.patchValue({
        category: selectedCategory
      });
    } else {
      this.profileForm.patchValue({
        category: null
      });
    }
  }


  //country

  public onCountrySelect(event: any) {
    this.checkCountrySelection(event);
  }

  public onCountryDeSelect(event: any) {
    this.profileForm.patchValue({
      country: null
    });
  }

  public checkCountrySelection(event: any) {

    let value: any = event;
    // get packages and separate with commas
    const selectedCountry = this.profileForm.value.country;
    this.selectedCountry = selectedCountry[0]._id;

    if (selectedCountry.length == 1) {

      this.profileForm.patchValue({
        country: selectedCountry
      });
    } else {
      this.profileForm.patchValue({
        country: null
      });
    }
  }

  //timezone

  public onTimezoneSelect(event: any) {
    this.checkTimezoneSelection(event);
  }

  public onTimezoneDeSelect(event: any) {
    this.profileForm.patchValue({
      timezone: null
    });
  }

  public checkTimezoneSelection(event: any) {

    let value: any = event;
    // get packages and separate with commas
    const selectedTimezone = this.profileForm.value.timezone;
    this.selectedTimezone = selectedTimezone[0]._id;

    if (selectedTimezone.length == 1) {

      this.profileForm.patchValue({
        timezone: selectedTimezone
      });
    } else {
      this.profileForm.patchValue({
        timezone: null
      });
    }
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

