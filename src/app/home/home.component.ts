import { Activities } from './../model/activities';
import { Showinfo } from './../model/showinfo';
import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showinfo: Showinfo[] = [];
  activities: Activities[] = [];
  constructor(private home: HomeService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.home.getData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.activities = res;
      },
    });
  }
}
