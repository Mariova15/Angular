import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit {

  persona:Persona;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {

    this.persona = this._route.snapshot.params.get('info');

  }

}
