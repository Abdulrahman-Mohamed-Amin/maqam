import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { environment } from '../../../../environments/environment';
import { Project } from '../../../core/interfaces/project';
import { ProjectService } from '../../../core/services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

    url = environment.mediaUrl
    projects:Project[] = []
    constructor(private _project:ProjectService){}
  
    ngOnInit(): void {
      this.getAll()
    }
  
    getAll(){
      this._project.getAll().subscribe(res =>{
        this.projects = res
        console.log(res);
        
      })
    }

}
