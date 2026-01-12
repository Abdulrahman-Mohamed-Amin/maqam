import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterModule } from "@angular/router";
import emailjs from 'emailjs-com';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  toasterText: string = ''
  toasterShow: boolean = false
  stauas: boolean = false
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  })
  sendEmail() {

    if (this.contactForm.valid) {
      emailjs.send(
        'service_iiwy4xm',
        'template_3h3fmth',
        this.contactForm.value
        ,
        'z9OsVB6yNfM-FmiUq'
      )
        .then(() => {
          this.contactForm.reset()
          this.toasterText = 'تم ارسال رسالتك بنجاح'
          this.stauas = true
          this.toasterShow = true
        })
        .catch((error) => {
          console.log('Error', error);
        });
    } else {
      this.stauas = false
      this.toasterShow = true
      this.toasterText = 'أحد الحقول فارغة'
    }

    setTimeout(() => {
      this.toasterShow = false
    }, 5000);
  }


}
