import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";
import {Product} from "./products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';

  ngOnInit(): void {
  }

}
