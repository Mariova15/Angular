import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})

@NgModule({
  imports: [
    MatToolbarModule
  ],
  exports: [
    MatToolbarModule
  ]
})

export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
