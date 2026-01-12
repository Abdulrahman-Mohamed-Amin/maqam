import emailjs from 'emailjs-com';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule , CommonModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {
  toasterText: string = ''
  toasterShow: boolean = false
  stauas: boolean = false

  priceForm: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    mail: new FormControl("", Validators.required),
    service: new FormControl("", Validators.required),
    request: new FormControl("", Validators.required),
    time: new FormControl("", Validators.required),
    notice: new FormControl("", Validators.required),
  })

  constructor() {

  }

  sendEmail() {

    if (this.priceForm.valid) {
      emailjs.send(
        'service_iiwy4xm',
        'template_pu852np',
        this.priceForm.value
        ,
        'z9OsVB6yNfM-FmiUq'
      )
        .then(() => {
          this.priceForm.reset()
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
