import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { OurServicesComponent } from "../landing/our-services/our-services.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-all-services',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, OurServicesComponent, RouterModule],
  templateUrl: './all-services.component.html',
  styleUrl: './all-services.component.css'
})
export class AllServicesComponent {

}
