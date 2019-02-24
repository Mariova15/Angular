import { Component, OnInit } from '@angular/core';
import { Interes } from 'src/app/modelo/Interes';
import { ActivatedRoute } from '@angular/router';
import { ListaUsuariosService } from 'src/app/lista-personas.service';

@Component({
  selector: 'app-crear-interes',
  templateUrl: './crear-interes.component.html',
  styleUrls: ['./crear-interes.component.css']
})
export class CrearInteresComponent implements OnInit {

  interes:Interes;
  nomInteres:string;
  descripcion:string;
  importancia:string;

  constructor(private _route:ActivatedRoute, private _servicioListaPersonas:ListaUsuariosService) {    
   }

  ngOnInit() {
  }

  annadirInteres(){
    this.interes = new Interes(this.nomInteres,this.descripcion,Number(this.importancia));
    this._servicioListaPersonas.getPersona(
      Number(this._route.snapshot.paramMap.get('persona'))).intereses.push(this.interes);
  }

}
