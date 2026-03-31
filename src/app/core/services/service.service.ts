import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Service } from '../interfaces/servies';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = environment.apiUrl + 'Service'
  
  constructor(private http:HttpClient) { }

  getServices(){
    return this.http.get<Service[]>(this.url)
  }
}
