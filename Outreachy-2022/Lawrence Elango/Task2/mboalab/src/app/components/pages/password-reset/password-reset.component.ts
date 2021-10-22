import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CoreService } from '../../../core/core.service';
import { Router, NavigationEnd } from "@angular/router";
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  public loading = false;
  public state: any;
  public resetId: any;
  public verification = false;
  resetForm: FormGroup;
  changePasswordForm: FormGroup;

  constructor(public core: CoreService,
    public router: Router,
    private fb: FormBuilder, private authenticationservice: AuthenticationService) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.changePasswordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.processReset();
  }

  onSubmitReset() {

    if (this.resetFormIsValid() && this.core.checkIfOnline()) {
      this.loading = true;
      let values = this.resetForm.value;

      this.authenticationservice.resetPassword(values).then(r => {
        this.core.showSuccess("Success", "Check Email for reset link...");
        //localStorage.setItem("page","menu");
        setTimeout(function () {
          this.router.navigate(["/login"]);
        }, 2000);
        this.resetForm.reset();
        this.loading = false;

      }).catch(e => {
        this.loading = false;
        this.core.handleError(e);
      });

    }

    return false;

  }

  onSubmitChangePassword() {
    if (this.changePasswordFormIsValid() && this.core.checkIfOnline()) {
      this.loading = true;
      let values = this.changePasswordForm.value;
      values.resetPasswordToken = this.resetId;

      this.authenticationservice.resetPasswordNow(values).then(r => {
        this.core.showSuccess("Success", "Password reset successfully");
        setTimeout(function () {
          this.router.navigate(["/login"]);
        }, 3000);
        this.changePasswordForm.reset();
        this.loading = false;

      }).catch(e => {
        this.loading = false;
        this.core.handleError(e);
      });

    }

    return false;
  }

  async processReset() {
    //check current url
    let splitUrl = this.router.url.split('/');
    this.state = splitUrl[2];
    this.resetId = splitUrl[3];

    if (!this.core.isEmptyOrNull(this.resetId) && this.state == 'change') {

      await this.verifyResetId(this.resetId);

    }


  }


  async verifyResetId(id: string) {

    this.loading = true;

    await this.authenticationservice
      .verifyResetId(id)
      .then(res => {
        this.loading = false;
        this.verification = true;
      })
      .catch(e => {
        this.loading = false;
        this.verification = false;
        this.core.handleError(e);
        this.redirectToLogin();
      });

  }

  redirectToLogin() {
    this.core.showSuccess('Success', 'Redirecting to login..')
    this.router.navigate(["/login"]);
  }

  resetFormIsValid() {
    return this.resetForm.controls.email.valid;
  }

  changePasswordFormIsValid() {
    return this.changePasswordForm.controls.password.valid
      && this.changePasswordForm.controls.confirmPassword.valid
      && this.passwordsMatch();
  }

  passwordsMatch() {
    return this.changePasswordForm.controls.password.value == this.changePasswordForm.controls.confirmPassword.value;
  }

}

