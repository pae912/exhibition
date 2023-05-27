import { MusicService } from '../../api-sdk/service/music.service';
import { Music } from '../../api-sdk/model/music';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent {
  p: number = 1;
  maxSize: string = '20';
  // musicShow: Music[] = [];
  searchText: string = '';
  displayedColumns: string[] = ['title', 'time'];
  musicShow!: MatTableDataSource<Music>;
  showInfo!: MatTableDataSource<Music>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private music: MusicService) {
    // const show = Array.from({length:100},(_,k) => createShow(k+1));
    // this.musicShow = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.music.getData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.musicShow = res;
        this.musicShow = new MatTableDataSource(res);
        this.musicShow.paginator = this.paginator;
      },
    });
  }
  // ngAfterViewInit() {
  //   this.musicShow.paginator = this.paginator;
  // }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.musicShow.filter = filterValue.trim().toLowerCase();

    if (this.musicShow.paginator) {
      this.musicShow.paginator.firstPage();
    }
  }
}

// function createShow(UID:number):Music{
//   const title = Music[Math.round(Math.random()*())]
// }
