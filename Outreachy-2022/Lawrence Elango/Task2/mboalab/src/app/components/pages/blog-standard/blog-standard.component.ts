import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-standard',
  templateUrl: './blog-standard.component.html',
  styleUrls: ['./blog-standard.component.css']
})
export class BlogStandardComponent implements OnInit {

  constructor() { }
  classname = "footer-area footer-area-two";
  ftbgimage = "assets/img/footer-bg.jpg";
  ftlogo = "assets/img/logo-2.png";
  ftshape = "";

  ngOnInit(): void {
  }

}
