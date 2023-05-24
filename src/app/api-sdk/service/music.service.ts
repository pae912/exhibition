import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  constructor(private http: HttpClient) {}

  getData(){
    const url = '../../assets/music performance.json';
    return this.http.get<any>(url,{});
  }
}
