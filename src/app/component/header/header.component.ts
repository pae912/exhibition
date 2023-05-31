import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  navhidden: boolean = false;
  prevScrollPos: number = window.pageYOffset;

  @HostListener('window:scroll', [])
  onScroll() {
    const currentScrollPos = window.pageYOffset;
    this.navhidden = currentScrollPos > this.prevScrollPos;
    this.prevScrollPos = currentScrollPos;
  }
}
