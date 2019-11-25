import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import * as $ from 'jquery';
import Swiper from 'swiper';
import Rellax from 'rellax';
import lax from 'lax.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.multiSlider();
    this.ParallaxHome();
    this.LaxforObjexts();
  }

  multiSlider()
  {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
      breakpoints: {
        1366: {
          slidesPerView: 3,
        },
        768: {
					slidesPerView: 1,
        },
        425: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 1,
        },
        320: {
          slidesPerView: 1,
        }
      }
    });
  }

  ParallaxHome()
  {
    const boxframe = new Rellax('.shape-box-dotted-lg');
    const arrowup = new Rellax('.shape-multiple-arrow');
    const boxdottedsm = new Rellax('.shape-box-dotted-sm-white');
  }

  LaxforObjexts()
  {
    window.onload = function() {
      lax.setup() // init

      const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
      }

      window.requestAnimationFrame(updateLax)
    }
  }

}
