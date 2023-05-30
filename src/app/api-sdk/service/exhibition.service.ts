import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  constructor(private http:HttpClient) { }

  getData(){
    const url = '../../assets/json/exhibition information.json';
    return this.http.get<any>(url,{});
  }
}
