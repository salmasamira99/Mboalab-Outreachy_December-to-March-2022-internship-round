import { Injectable } from '@angular/core';
import data from "../../data/banner.json";
import $ from "jquery";

@Injectable({
  providedIn: 'root'
})
export class BannerHelperService {
  public banner = data;
  constructor() { }
  settings = {
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
  };
  slickInit(e) {
    var $firstAnimatingElements = $('.single-banner').find('[data-animation]');
    this.doAnimations($firstAnimatingElements);
  }
  beforeChange(e: any) {
    var $firstAnimatingElements = $('.single-banner').find('[data-animation]');
    this.doAnimations($firstAnimatingElements);
  }

  public doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function () {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function () {
        $this.removeClass($animationType);
      });
    });
  }
}
