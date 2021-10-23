import { Injectable, HostListener, AfterViewInit, OnInit } from '@angular/core';
import { CoreService } from 'src/app/core/core.service';
import navigation from '../../data/navigation.json';
import $ from 'jquery';
import 'magnific-popup';

@Injectable({
  providedIn: 'root'
})
export class HelperService implements AfterViewInit, OnInit {

  windowScrolled: boolean | undefined;
  public navigation = navigation;

  constructor( private core: CoreService){
  }

  // Sticky Nav
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.windowScrolled = window.scrollY > 100;
  }
  // Navigation
  navMethod: boolean = false;
  toggleNav() {
    this.navMethod = !this.navMethod;
  }
  // Search
  searchMethod: boolean = false;
  toggleSearch() {
    this.searchMethod = !this.searchMethod;
  }
  // Mobile
  open: boolean = false;
  trigger(item: { open: boolean; }) {
    item.open = !item.open;
  }
  // Add class on resize and onload window
  visible: boolean = false;
  breakpoint: number = 991;
  public innerWidth: any;
  detectHeader() {
    this.innerWidth = window.innerWidth;
    this.visible = this.innerWidth >= this.breakpoint;
  }

  role = this.core.isLoggedIn();

  ngOnInit(): void {
    this.detectHeader();
  }


  ngAfterViewInit(): void {
    ($('.popup-youtube') as any).magnificPopup({
      type: 'iframe'
    });
    ($('.gallery-img-popup') as any).magnificPopup({
      type: 'image',
      gallery: {
        enabled: true,
      },
      mainClass: 'mfp-fade',
    });
  }

}
