import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  constructor() { }
  classname = "footer-area footer-area-two";
  ftbgimage = "assets/img/footer-bg.jpg";
  ftlogo = "assets/img/logo-1.1.png";
  ftshape = "";

  ngOnInit(): void {
  }

}
