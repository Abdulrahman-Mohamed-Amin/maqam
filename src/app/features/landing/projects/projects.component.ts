import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { environment } from '../../../../environments/environment';
import { Project } from '../../../core/interfaces/project';
import { ProjectService } from '../../../core/services/project.service';
import { Service } from '../../../core/interfaces/servies';
import { ServiceService } from '../../../core/services/service.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  url = environment.mediaUrl
  projects: Project[] = []
  services: Service[] = []
  constructor(private _project: ProjectService, private _service: ServiceService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this._project.getAll().subscribe(res => {
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
