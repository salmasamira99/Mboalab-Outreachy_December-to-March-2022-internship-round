import { Component, OnInit } from '@angular/core';
import data from "../../../../data/progress.json";

@Component({
  selector: 'app-progess-bar',
  templateUrl: './progess-bar.component.html',
  styleUrls: ['./progess-bar.component.css']
})
export class ProgessBarComponent implements OnInit {
  public progress = data;
  constructor() { }

  ngOnInit(): void {
  }

}
