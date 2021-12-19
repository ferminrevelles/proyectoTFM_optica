import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { faMapMarkedAlt, faBuilding, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService],
})
export class ContactComponent implements OnInit {
  
  faMapMarkedAlt = faMapMarkedAlt;
  faBuilding = faBuilding;
  faPhone = faPhoneAlt;
  submitted = false;
  errorLogin = false;

  constructor(
    private formBuilder: FormBuilder,
    private contact: ContactService
  ) { }

  contactForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    surname: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
    comment: ['', Validators.required]
  });
 

  ngOnInit(): void {
   
  }

  onSubmit(contactForm:any) {
    console.log(contactForm);

    this.contact.PostMessage(contactForm).subscribe(response => {
    console.log(response)
    }, error => {
    console.warn(error.responseText)
    console.log({ error })
    })
  }

  getErrorMessageEmail() {
  if (this.contactForm.value.email=="") {
        return 'You must enter a value';
      }
        return 'Not a valid email';
    }
    getErrorMessagePhone() {
      if (this.contactForm.value.phone=="") {
            return 'You must enter a phone';
          }
        return "Value must be nine number";
      }
    
  getErrorMessagePassword() {
    if (this.contactForm.value.password=="") {
          return 'You must enter a value';
        }
      return "You must enter a value";
    }


}
