import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CoreService } from '../../../../core/core.service';
import { ProfilesService } from '../../../../services/profiles.service';
import { NotificationsService } from '../../../../services/notifications.service';
import { SharedService } from '../../../../services/shared.service';
import { Router, NavigationEnd } from "@angular/router";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import _ from 'lodash';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  public loadingData = false;
  public loading = false;
  public action: string;
  public menu: any;
  public currentTab = "tab1";
  @Input() user: any;
  @Input() userProfile: any;
  @Input() preview: any;
  @Input() default: any;

  public file: any;


  constructor(public router: Router,
    public _core: CoreService,
    public profilesService: ProfilesService,
    private datePipe: DatePipe,
    public sharedService: SharedService) { }

  ngOnInit(): void {
    this.menu = this._core.pageMenu;
    this.redirectToLogin();
  }
  setAction(action: string) {
    this.action = action;
  }

  setNewLocal(user: any) {

    if (!this._core.isEmptyOrNull(this._core.decryptFromLocalStorage("currentUser"))) {
      let current = this._core.decryptFromLocalStorage("currentUser");;
      current.user = user
      this._core.encryptToLocalStorage('currentUser', JSON.stringify(current));
      this._core.loginUser = current;
    }

  }


  fileChanged($event: any) {
    this.handleUpload($event);
  }

  handleUpload(event: any) {
    this.file = event.target.files[0];

    if (this.file && this.file.size > 1000000) {
      this._core.showError("Error", "Limit file to 1 mb");
      return;
    }

    if (this.file) {
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        this.preview = reader.result;
      };

      reader.onloadend = () => {
        if (this.preview) {
          this.savePhoto();
        }
      }
    }

  }


  savePhoto() {

    let obj = {
      file: this.file
    }
    this.loadingData = true;
    this.profilesService.updatePhoto(obj).then(r => {
      this._core.showSuccess("Success", "Photo updated successfully...");
      this.loadingData = false;
      //location.reload();
      //this.headerComponent.setPhoto(this.preview);
      // this.getUserProfile();
    }).catch(e => {
      this.loadingData = false;
      this._core.handleError(e);
    });

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


