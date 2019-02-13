import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../modelo/Persona';

@Component({
  selector: 'app-persona-lista',
  templateUrl: './persona-lista.component.html',
  styleUrls: ['./persona-lista.component.css']
})
export class PersonaListaComponent implements OnInit {

  @Input() persona:Persona;

  constructor() { }

  ngOnInit() {
  }

}
