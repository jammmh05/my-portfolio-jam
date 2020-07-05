import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import * as $ from 'jquery';
import Swiper from 'swiper';
import Rellax from 'rellax';
import lax from 'lax.js';
import 'lightgallery';
import 'lg-zoom';
import 'paroller.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.multiSlider();
    // this.ParallaxHome();
    this.LaxforObjexts();
    this.LightGallery();
    this.ParollerParallax();
  }

  multiSlider()
  {
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: '3',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
      breakpoints: {
        1920: {
          slidesPerView: 3,
        },
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

  // ParallaxHome()
  // {
  //   const boxframe = new Rellax('.shape-box-dotted-lg');
  //   const arrowup = new Rellax('.shape-multiple-arrow');
  //   const boxdottedsm = new Rellax('.shape-box-dotted-sm-white');
  // }

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

  LightGallery()
  {
    $(document).ready(function() {
      $("#lightgallery").lightGallery({
        zoom: 'zoom',

      });
    });
  }

  ParollerParallax()
  {
    $('.home-container').paroller();
  }

  downloadMyPDF()
  {
    let link = document.createElement("a");
    link.download = "John-Paul-Sebastian-Details";
    link.href = "../../../assets/my-cv-updated.pdf";
    link.click();
  }

}
