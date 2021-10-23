import { Component, OnInit } from '@angular/core';
import data from "../../../../data/faqs.json";

@Component({
  selector: 'app-styleone',
  templateUrl: './styleone.component.html',
  styleUrls: ['./styleone.component.css']
})
export class StyleoneComponent implements OnInit {
  public faqs = data;
  constructor() { }
  ngOnInit(): void {
  }

}
