import { Component, HostListener } from '@angular/core';
import { Activities } from 'src/app/api-sdk/model/activities';
import { ExhibitionService } from 'src/app/api-sdk/service/exhibition.service';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.scss'],
})
export class ExhibitionComponent {
  p: number = 1;
  maxSize: string = '20';
  showinfo: Activities[] = [];
  activities: Activities[] = [];
  showButton: boolean = false;
  constructor(private exhibition: ExhibitionService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.exhibition.getData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.activities = res;
      },
    });
  }
  @HostListener('window:scroll')
  onScoll(){
    this.showButton = window.pageYOffset > 400;
  }
  scrollTop() {
    window.scroll({
      top:0,
      behavior:'smooth'
    })
  }
}
