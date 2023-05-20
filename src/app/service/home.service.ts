import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getData(){
    const url = '../../assets/exhibition information.json';
    return this.http.get<any>(url,{});
  }
}
