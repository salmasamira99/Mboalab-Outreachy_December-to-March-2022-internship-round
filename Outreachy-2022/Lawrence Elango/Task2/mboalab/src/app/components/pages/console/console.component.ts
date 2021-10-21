import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  constructor() { }

  classname = "footer-area footer-area-two";
  ftbgimage = "assets/img/footer-bg.jpg";
  ftlogo = "assets/img/logo-2.png";
  ftshape = "";

  ngOnInit(): void {
  }


}
