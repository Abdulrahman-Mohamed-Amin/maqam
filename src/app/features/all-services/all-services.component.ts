import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { OurServicesComponent } from "../landing/our-services/our-services.component";
import { RouterModule } from "@angular/router";
import { ServiceService } from '../../core/services/service.service';
import { environment } from '../../../environments/environment';
import { Service } from '../../core/interfaces/servies';

@Component({
  selector: 'app-all-services',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, OurServicesComponent, RouterModule],
  templateUrl: './all-services.component.html',
  styleUrl: './all-services.component.css'
})
export class AllServicesComponent implements OnInit{

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
