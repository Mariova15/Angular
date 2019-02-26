import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelo/Persona';
import { ActivatedRoute } from '@angular/router';
import { ListaUsuariosService } from 'src/app/lista-personas.service';
import { Location } from '@angular/common' ;

@Component({
  selector: 'app-mandar-email',
  templateUrl: './mandar-email.component.html',
  styleUrls: ['./mandar-email.component.css']
})
export class MandarEmailComponent implements OnInit {

  persona:Persona;
  mensaje:string;

  constructor(private _route:ActivatedRoute,  private _servicioListaPersonas:ListaUsuariosService, private _location: Location) { }

  ngOnInit() {
    this.persona = this._servicioListaPersonas.getPersona(Number(this._route.snapshot.paramMap.get('destinatario')));
  }

  enviarMail(){
    this.mensaje = "ENVIADO";
    setTimeout(() => {
      this.mensaje = "";
      this._location.back();
      }, 2000);     
  }

  cancelar(){
    this._location.back();
  }

}
