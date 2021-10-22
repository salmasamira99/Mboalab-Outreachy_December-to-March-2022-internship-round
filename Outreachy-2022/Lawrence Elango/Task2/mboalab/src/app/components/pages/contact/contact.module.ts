import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../../shared/shared.module';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { ContactformComponent } from './contactform/contactform.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactComponent, ContactinfoComponent, ContactformComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule
  ]
})
export class ContactModule { }
