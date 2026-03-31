import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  url = environment.apiUrl + 'Project'
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Project[]>(this.url)
  }

  getById(id: number) {
    return this.http.get<Project>(this.url + '/' + id)
  }
  
}
