import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { Router } from '@angular/router';
import { ListaUsuariosService } from 'src/app/lista-personas.service';
import { Interes } from 'src/app/modelo/Interes';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  public listaPersonas:Persona[];  

  constructor(private _router:Router, private _servicioListaPersonas:ListaUsuariosService) { 
  }

  ngOnInit() {
    this.listaPersonas = this._servicioListaPersonas.getListaPersonas();    
  }

}
