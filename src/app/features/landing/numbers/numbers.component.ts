import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-numbers',
  standalone: true,
  imports: [],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent {
 counters = [
    { value: 0, target: 245 },
    { value: 0, target: 74 },
    { value: 0, target:5 },
    { value: 0, target:10 },
  ];

  private started = false;
  private duration = 2000;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      // مراقبة ظهور السيكشن
      this.observeSection();
    }
  }

  private observeSection() {
    const section = document.querySelector('.stats');
    if (!section) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.started) {
          this.started = true;
          this.animateCounters();
        }
      });
    }, { threshold: 0.8 });

    observer.observe(section);
  }

  private animateCounters() {
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);

      this.counters = this.counters.map(c => ({
        ...c,
        value: Math.floor(c.target * progress)
      }));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }
}
