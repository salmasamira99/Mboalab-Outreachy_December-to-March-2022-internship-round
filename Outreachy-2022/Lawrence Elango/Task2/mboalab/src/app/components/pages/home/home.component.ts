import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoreService } from '../../../core/core.service';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public role: any;
  public loggedIn = false;

  private wowSubscription: Subscription;
  constructor(private wowService: NgwWowService, public core: CoreService) {
    this.wowService.init();
  }
  classname = "footer-area footer-area-two";
  ftbgimage = "assets/img/footer-bg.jpg";
  ftlogo = "assets/img/logo-2.png";
  ftshape = "d-none";

  ngOnInit(): void {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (_item: HTMLElement) => {
        // do whatever you want with revealed element
      });
  }
  ngOnDestroy() {
    this.wowSubscription.unsubscribe();
  }

}
