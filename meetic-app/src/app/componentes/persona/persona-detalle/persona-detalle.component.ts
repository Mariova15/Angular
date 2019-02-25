import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaUsuariosService } from 'src/app/lista-personas.service';

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit {

  persona:Persona;

  constructor(private _route:ActivatedRoute,  private _servicioListaPersonas:ListaUsuariosService) { }

  ngOnInit() {
    if(Number(this._route.snapshot.paramMap.get('info')) === -1){
      this.persona = this._servicioListaPersonas.getUsuario();
    }else{
      this.persona = this._servicioListaPersonas.getPersona(Number(this._route.snapshot.paramMap.get('info')));
    }    
  }

  votar(){
    this.persona.numVotos ++;
  }

}
