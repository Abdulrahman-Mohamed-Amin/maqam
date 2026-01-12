import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { FooterComponent } from "../../../shared/footer/footer.component";

@Component({
  selector: 'app-project1',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './project1.component.html',
  styleUrl: './project1.component.css'
})
export class Project1Component {

}
