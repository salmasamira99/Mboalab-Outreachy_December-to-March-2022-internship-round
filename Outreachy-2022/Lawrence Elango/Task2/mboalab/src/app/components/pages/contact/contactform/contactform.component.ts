import { Component } from '@angular/core';
import { FormHelperService } from 'src/app/components/contact/form-helper.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
}) 
export class ContactformComponent extends FormHelperService {

}
