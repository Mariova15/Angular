import { Component, OnInit } from '@angular/core';
import { Persona } from '../modelo/Persona';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  personas = [];
  persona = new Persona(0,"string","string",0,"string","string","string");
  

  constructor() { 
    let i = 0;
    while( i <=5){
      this.personas.push(this.persona);
      i++;
    }
  }

  ngOnInit() {
  }

}
