import emailjs from 'emailjs-com';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../core/services/service.service';
import { Service } from '../../core/interfaces/servies';
import { PriceService } from '../../core/services/price.service';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit {
  toasterText: string = ''
  toasterShow: boolean = false
  stauas: boolean = false

  selectedValue: string[] = []
  services: Service[] = []

  priceForm: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    serviceId: new FormControl("", Validators.required),
    requestType: new FormControl("", Validators.required),
    availableDateTime: new FormControl("", Validators.required),
    notes: new FormControl("", Validators.required),
  })

  constructor(private _serv: ServiceService, private _price: PriceService) {

  }

  ngOnInit(): void {
    this.getService()
  }


  getService() {
    this._serv.getServices().subscribe(res => {
      this.services = res
    })
  }

  sendEmail() {

    let formdata = new FormData()

    formdata.append('name', this.priceForm.value.name)
    formdata.append('phone', this.priceForm.value.phone)
    formdata.append('email', this.priceForm.value.email)
    // if(this.selectedValue.length > 0){
    //   this.selectedValue.forEach(s =>{

    //     formdata.append('serviceId' , s)
    //   }) 
    // }
    if (this.selectedValue.length > 0) {
      this.selectedValue.forEach(s => {
        formdata.append('serviceId[]', s); // لاحظ [] بعد الاسم
      })
    }
    formdata.append('availableDateTime', this.priceForm.value.availableDateTime)
    formdata.append('requestType', this.priceForm.value.requestType)
    formdata.append('notes', this.priceForm.value.notes)
    //     let arr = this.selectedValue.map(n =>  +n)
    //     console.log(arr);

    // let obj = {
    //   name: this.priceForm.value.name,
    //   phone: this.priceForm.value.phone,
    //   email: this.priceForm.value.email,
    //   serviceId: this.selectedValue,
    //   requestType: this.priceForm.value.requestType,
    //   availableDateTime: this.priceForm.value.availableDateTime,
    //   notes: this.priceForm.value.notes
    // };

    console.log(this.selectedValue);


    this._price.send(formdata).subscribe(res => {
      console.log(res);

    })

    setTimeout(() => {
      this.toasterShow = false
    }, 5000);
  }

  onChange(event: Event) {

    const target = event.target as HTMLInputElement
    const checked = target.checked
    const value = target.value


    if (checked) {
      this.selectedValue.push(value)

    } else {
      this.selectedValue.splice(this.selectedValue.indexOf(value), 1)

    }

  }
}
