import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { News } from '../../../core/interfaces/news';
import { environment } from '../../../../environments/environment';
import { NewsService } from '../../../core/services/news.service';

Swiper.use([Navigation, Pagination]);
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements AfterViewInit {

  swiper?: Swiper;
  news:News[] = []
  url = environment.mediaUrl
  constructor(private _news:NewsService){

  }
ngOnInit() {
  this.getNews()
  
}
  ngAfterViewInit() {
    this.initSwiper();
  }r?: Swiper;

  getNews (){
    this._news.getNews().subscribe(res =>{
      this.news = res
      console.log(res);
      
    })
  }
  initSwiper() {
    if (this.swiper) this.swiper.destroy(true, true);
    this.swiper = new Swiper('.mySwiper2', {
      spaceBetween: 20,
      breakpoints: {
        1200: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        578: { slidesPerView: 1 }
      },
      loop: true,
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      speed: 500,
    });
  }
}
