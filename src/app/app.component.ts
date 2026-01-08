import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private router :Router){}

  ngOnInit(): void {
    this.scrollToTopOnRouteChange()
  }
  scrollToTopOnRouteChange(): void {
  this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' 
      });
    });
}
}
