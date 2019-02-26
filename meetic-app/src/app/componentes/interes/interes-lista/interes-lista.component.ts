import { Component, OnInit, Input } from '@angular/core';
import { Interes } from 'src/app/modelo/Interes';
import { Persona } from 'src/app/modelo/Persona';

@Component({
  selector: 'app-interes-lista',
  templateUrl: './interes-lista.component.html',
  styleUrls: ['./interes-lista.component.css']
})
export class InteresListaComponent implements OnInit {

  @Input() interes:Interes;
  @Input() persona:Persona;

  constructor() { }

  ngOnInit() {
  }

  borrarInteres(){
    this.persona.intereses.splice(this.persona.intereses.indexOf(this.interes),1)
  }

}
