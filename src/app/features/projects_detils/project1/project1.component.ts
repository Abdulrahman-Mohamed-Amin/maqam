import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../shared/header/header.component";
import { FooterComponent } from "../../../shared/footer/footer.component";
import { environment } from '../../../../environments/environment';
import { Project } from '../../../core/interfaces/project';
import { ProjectService } from '../../../core/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project1',
  standalone: true,
  imports: [HeaderComponent, FooterComponent , CommonModule],
  templateUrl: './project1.component.html',
  styleUrl: './project1.component.css',
  providers: [
  { provide: LOCALE_ID, useValue: 'ar' }
]
})
export class Project1Component implements OnInit{
url = environment.mediaUrl
id:number = 0
project:Project | null = null
  constructor(private _project:ProjectService , private _route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = +this._route.snapshot.params['id']
    this.getProject()
  }


  getProject(){
    this._project.getById(this.id).subscribe(res =>{

      this.project = res
      console.log(res);
      
    })
  }
}
