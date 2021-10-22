import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy.component';
import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [PrivacyComponent, ContentComponent],
  imports: [
    CommonModule,
    PrivacyRoutingModule,
    SharedModule,
    NgbModule
  ]
})
export class PrivacyModule { }
