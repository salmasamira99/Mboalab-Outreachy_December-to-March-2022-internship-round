import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AccountVerificationRoutingModule } from './account-verification-routing.module';
import { AccountVerificationComponent } from './account-verification.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AccountVerificationComponent],
  imports: [
    CommonModule,
    AccountVerificationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    FormsModule,
    NgbModule
  ]
})
export class AccountVerificationModule { }
