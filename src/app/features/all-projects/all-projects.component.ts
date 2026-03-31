import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterLink } from "@angular/router";
import { Project } from '../../core/interfaces/project';
import { ProjectService } from '../../core/services/project.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent implements OnInit{
  url = environment.mediaUrl
  projects:Project[] = []
  constructor(private _project:ProjectService){}

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this._project.getAll().subscribe(res =>{
      this.projects = res
    })
  }
}
