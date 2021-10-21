import { Component, OnInit } from '@angular/core';
import data from "../../../../data/faqs.json";

@Component({
  selector: 'app-styletwo',
  templateUrl: './styletwo.component.html',
  styleUrls: ['./styletwo.component.css']
})
export class StyletwoComponent implements OnInit {

  public faqs = data;
  constructor() { }
  ngOnInit(): void {
  }

}
