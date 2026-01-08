import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterLink } from "@angular/router";
import { NumbersComponent } from "../landing/numbers/numbers.component";
import { OurServicesComponent } from "../landing/our-services/our-services.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, NumbersComponent, OurServicesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
