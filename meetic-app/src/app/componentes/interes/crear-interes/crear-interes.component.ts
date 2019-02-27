import { Component, OnInit } from '@angular/core';
import { Interes } from 'src/app/modelo/Interes';
import { ActivatedRoute } from '@angular/router';
import { ListaUsuariosService } from 'src/app/lista-personas.service';
import { Location } from '@angular/common' ;
import { Persona } from 'src/app/modelo/Persona';

@Component({
  selector: 'app-crear-interes',
  templateUrl: './crear-interes.component.html',
  styleUrls: ['./crear-interes.component.css']
})
export class CrearInteresComponent implements OnInit {

  private interes:Interes;
  private nomInteres:string;
  private descripcion:string;
  private importancia:string;
  private persona:Persona;

  constructor(private _route:ActivatedRoute, private _servicioListaPersonas:ListaUsuariosService,private _location: Location) {    
   }

  ngOnInit() {
    this.persona = this._servicioListaPersonas.getPersona(
      Number(this._route.snapshot.paramMap.get('persona')));
  }

  annadirInteres(){
    this.interes = new Interes(this.nomInteres,this.descripcion,Number(this.importancia));  
      this.persona.intereses.push(this.interes);
  }

  
  backClicked() {
    this._location.back();
  }
}
