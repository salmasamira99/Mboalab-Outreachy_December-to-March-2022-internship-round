import { Component, OnInit } from '@angular/core';
import team from '../../../../data/team.json';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }
  public team = team;
  settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<span class="prev"><i class="fal fa-long-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="fal fa-long-arrow-right"></i></span>',
    appendArrows: '.team-slider-two-arrow',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }
  ngOnInit(): void {
  }

}
