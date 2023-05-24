import { MusicService } from '../../api-sdk/service/music.service';
import { Music } from '../../api-sdk/model/music';
import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent {
  musicShow:Music[] = [];
  constructor(private music: MusicService) {}
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.music.getData().subscribe({
      next: (res: any) => {
        console.log(res);
        this.musicShow = res;
      },
    });
  }
}
