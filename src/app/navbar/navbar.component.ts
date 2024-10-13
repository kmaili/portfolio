import {Component, HostListener} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  protected isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }

  getNavBarStyle(isMenu: boolean = false, isIcon: boolean = false) {
    return isMenu ?
    `nav-link text-${this.isScrolled ? 'dark' : 'white'} ${isIcon ? '': ' rounded border'+(this.isScrolled?' border-dark':' border-white')}` :
    `navbar navbar-expand-lg navbar-light ${this.isScrolled ? 'bg-light':''}`
  }
  openNewTab(url: string) {
    window.open(url, '_blank');
  }
}
