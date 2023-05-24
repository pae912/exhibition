import { Activities } from '../../api-sdk/model/activities';
import { Component } from '@angular/core';
import { HomeService } from '../../api-sdk/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  p: number = 1;
  maxSize:string = "20";
  showinfo: Activities[] = [];
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
