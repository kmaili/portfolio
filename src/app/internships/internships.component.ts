import {Component, OnInit} from '@angular/core';
import {SlideInOnDirective} from "../directives/slide-in-on.directive";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-internships',
  standalone: true,
  imports: [
    SlideInOnDirective
  ],
  templateUrl: './internships.component.html',
  styleUrl: './internships.component.css'
})
export class InternshipsComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scrolls to the top of the window
      }
    });
  }
}
