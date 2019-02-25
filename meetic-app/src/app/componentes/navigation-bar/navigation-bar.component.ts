import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common' ;

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})

export class NavigationBarComponent implements OnInit {

  @Input() estado:boolean;
  @Input() nomCiudad:string;
  @Input() contador:string;
  @Input() emparejar:string;

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

}
