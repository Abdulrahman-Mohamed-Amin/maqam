import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { RouterLink } from "@angular/router";
import { Project } from '../../core/interfaces/project';
import { ProjectService } from '../../core/services/project.service';
import { environment } from '../../../environments/environment';
import { forkJoin } from 'rxjs';
import { ServiceService } from '../../core/services/service.service';

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
  constructor(private _project:ProjectService ,  private _service: ServiceService){}

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this._project.getAll().subscribe(res =>{
      this.projects = res
      this.getServices()
    })
  }

   getServices() {
      this.projects.forEach(project => {
  
        let requests = project.serviceIds.map(id =>
          this._service.getServiceByid(id)
        );
  
        forkJoin(requests).subscribe(services => {
          project.services = services;
          
        });
  
      });
  
      console.log(this.projects);
      
    }
}
