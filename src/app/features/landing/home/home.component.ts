import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { AboutSecComponent } from "../about-sec/about-sec.component";
import { OurServicesComponent } from "../our-services/our-services.component";
import { ProjectsComponent } from "../projects/projects.component";
import { NumbersComponent } from "../numbers/numbers.component";
import { NewsComponent } from "../news/news.component";
import { FooterComponent } from "../../../shared/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, AboutSecComponent, OurServicesComponent, ProjectsComponent, NumbersComponent, NewsComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
