import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { environment } from '../../../../environments/environment';
import { Project } from '../../../core/interfaces/project';
import { ProjectService } from '../../../core/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../../core/services/service.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-project1',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './project1.component.html',
  styleUrl: './project1.component.css',
  providers: [
    { provide: LOCALE_ID, useValue: 'ar' }
  ]
})
export class Project1Component implements OnInit {
  url = environment.mediaUrl
  id: number = 0
  project: Project | null = null
  constructor(private _project: ProjectService, private _route: ActivatedRoute, private _service: ServiceService) { }

  ngOnInit(): void {
    this.id = +this._route.snapshot.params['id']
    this.getProject()
  }


  getProject() {
    this._project.getById(this.id).subscribe(res => {

      this.project = res
      this.getServices()

    })
  }

  getServices() {


    if (this.project) {

      let requests = this.project?.serviceIds.map(id =>
        this._service.getServiceByid(id)
      );

      forkJoin(requests).subscribe(services => {
        if (this.project) {
          this.project.services = services;
        }

      });
    }



  }
}
