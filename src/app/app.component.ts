import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, NavigationCancel, NavigationError, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import AOS from 'aos';
import { LoaderService } from './core/services/loader.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  loading = false; // 👈 ده للـ HTML

  constructor(private router: Router, private loaderService: LoaderService) {}

  ngOnInit(): void {

    this.loaderService.loading$.subscribe(res =>{
      this.loading = res
    })
    this.scrollToTopOnRouteChange();
    this.handleLoader(); // 👈 تشغيل اللودر

    AOS.init({
      duration: 1000,
      once: true
    });
  }

  // ✅ scroll top
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

  // ✅ اللودر مع الرواتر
  handleLoader(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        setTimeout(() => {
          this.loaderService.hide();
        }, 1000);
      }
    });
  }
}