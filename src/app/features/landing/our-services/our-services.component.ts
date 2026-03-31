import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { environment } from '../../../../environments/environment';
import { Service } from '../../../core/interfaces/servies';
import { ServiceService } from '../../../core/services/service.service';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {
  url = environment.mediaUrl
  services:Service[] = []
  constructor(private _service:ServiceService){}

  ngOnInit(): void {
    this.getAllService()
  }

  getAllService() {
    this._service.getServices().subscribe(res =>{
      this.services = res 
      console.log(res);
    })
  }
}
