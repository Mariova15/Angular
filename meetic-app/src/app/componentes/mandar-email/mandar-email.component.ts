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
  enviando:string;
  nombre:string;
  email:string;
  mensaje:string;
  mostrarBotones:boolean = true;

  constructor(private _route:ActivatedRoute,  private _servicioListaPersonas:ListaUsuariosService, private _location: Location) { }

  ngOnInit() {
    this.persona = this._servicioListaPersonas.getPersona(Number(this._route.snapshot.paramMap.get('destinatario')));
    this.nombre = this.persona.nombre;
    this.email = this.persona.email;
  }

  enviarMail(){
    this.mostrarBotones = false;
    this.enviando = "ENVIADO";
    this.nombre = "";
    this.email = "";
    this.mensaje = "";
    setTimeout(() => {
      this.mostrarBotones = true;
      this.enviando = "";
      this._location.back();
      }, 2000);     
  }

  cancelar(){
    this._location.back();
  }

}
