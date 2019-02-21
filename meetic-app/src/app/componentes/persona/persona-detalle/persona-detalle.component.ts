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

  //prueba:string;

  constructor(private _route:ActivatedRoute, private _servicioListaPersonas:ListaUsuariosService) { }

  ngOnInit() {

    //this.prueba = this._route.snapshot.paramMap.get('info');
    this.persona = this._servicioListaPersonas.getPersona(Number(this._route.snapshot.paramMap.get('info')));

  }

}
