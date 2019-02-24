import { Component, OnInit, Input } from '@angular/core';
import { Interes } from 'src/app/modelo/Interes';

@Component({
  selector: 'app-interes-lista',
  templateUrl: './interes-lista.component.html',
  styleUrls: ['./interes-lista.component.css']
})
export class InteresListaComponent implements OnInit {

  @Input() interes:Interes;

  constructor() { }

  ngOnInit() {
  }

}
