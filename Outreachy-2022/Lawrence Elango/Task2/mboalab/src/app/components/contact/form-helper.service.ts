import { Injectable } from '@angular/core';
import { ContactService } from './contact-helper.service';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
}) 
export class FormHelperService {
  model = new Contact;
  submitted = false; 
  error: {} | undefined;
  constructor(private contactService: ContactService) { }
  onSubmit() {
    this.submitted = true; 
    return this.contactService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  }
}
