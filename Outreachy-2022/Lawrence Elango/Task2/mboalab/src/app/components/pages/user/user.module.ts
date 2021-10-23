import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { NgxLoadingModule, ngxLoadingAnimationTypes } from "ngx-loading";
import { DxDataGridModule, DxTooltipModule, DxTemplateModule } from "devextreme-angular";
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import {
  NgbDropdownModule,
  NgbButtonsModule,
  NgbAlertModule,
  NgbDatepickerModule,
  NgbModalModule,
  NgbTooltipModule,
  NgbPopoverModule,
  NgbModule
} from "@ng-bootstrap/ng-bootstrap";
import { PostsComponent } from './posts/posts.component';
import { ModalPostComponent } from './modal-post/modal-post.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';


@NgModule({
  declarations: [UserComponent, ProfileComponent, PostsComponent, ModalPostComponent, SettingsComponent, ProfileHeaderComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    NgbDropdownModule,
    NgbButtonsModule,
    NgbAlertModule,
    NgbDatepickerModule,
    NgbModalModule,
    CKEditorModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.4)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff',
      fullScreenBackdrop: true
    }),
    NgbTooltipModule,
    NgbPopoverModule,
    NgbModule,
    ReactiveFormsModule, DxDataGridModule, DxTooltipModule, DxTemplateModule,
    NgMultiSelectDropDownModule
  ]
})
export class UserModule { }
