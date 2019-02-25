import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { Router } from '@angular/router';
import { ListaUsuariosService } from 'src/app/lista-personas.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  public listaPersonas:Persona[];
  public usuarioApplicacion:Persona;  

  constructor(private _router:Router, private _servicioListaPersonas:ListaUsuariosService) { 
  }

  ngOnInit() {
    this.usuarioApplicacion = this._servicioListaPersonas.getUsuario();
    if(this._servicioListaPersonas.getListaPersonasFiltradas() != null){
      this.listaPersonas = this._servicioListaPersonas.getListaPersonasFiltradas();
    }
    else{
      this.listaPersonas = this._servicioListaPersonas.getListaPersonasFiltradaPorciudad(this.usuarioApplicacion.direccion);
    }
  }

}
