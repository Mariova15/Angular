import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../modelo/Persona';

@Component({
  selector: 'app-persona-component',
  templateUrl: './persona-component.component.html',
  styleUrls: ['./persona-component.component.css']
})
export class PersonaComponentComponent implements OnInit {

  @Input() persona:Persona;

  constructor() { }

  ngOnInit() {
  }

}
