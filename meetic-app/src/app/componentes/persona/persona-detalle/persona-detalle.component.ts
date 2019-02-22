import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { ActivatedRoute } from '@angular/router';
import { ListaUsuariosService } from 'src/app/lista-personas.service';

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit {

  persona:Persona;

  constructor(private _route:ActivatedRoute, private _servicioListaPersonas:ListaUsuariosService) { }

  ngOnInit() {
    this.persona = this._servicioListaPersonas.getPersona(Number(this._route.snapshot.paramMap.get('info')));
  }

  votar(){
    this.persona.numVotos ++;
  }

}
