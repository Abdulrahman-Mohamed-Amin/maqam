import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  url = environment.apiUrl + 'Request'

  constructor(private http:HttpClient) { }

  send(endpoint:any){
    return this.http.post(this.url , endpoint)
  }

  

}
