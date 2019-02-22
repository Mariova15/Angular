import { Injectable } from '@angular/core';
import { Persona } from './modelo/Persona';

const urlFoto:string = "https://bit.ly/2sNhJiO";

const LISTA_PERSONAS:Persona[]=[new Persona(0,"Lisa","Linke",urlFoto,37,"LisaJLinke@gmail.com","Femenino","Sama"),
new Persona(1,"Benildo","Mendoza",urlFoto,27,"BenildoMendozaPatino@gmail.com","Masculino","La felguera"),
new Persona(2,"Jacob","Pizarro",urlFoto,34,"JacobPizarroSotelo@gmail.com","Masculino","Sama"),
new Persona(3,"Mirabel","Díaz",urlFoto,26,"MirabelDiaz@gmail.com","Femenino","Sama"),
new Persona(4,"Sixto","Ortega",urlFoto,22,"SixtoAltamiranoOrtega@gmail.com","Masculino","La felguera"),
new Persona(5,"Jacqueline","Valentín",urlFoto,28,"JacquelineValentin@gmail.com","Femenino","Sama")];

@Injectable({
  providedIn: 'root'
})
export class ListaUsuariosService {

  constructor() { }

  getListaPersonas():Persona[]{
    return LISTA_PERSONAS;
  }

  getPersona(codigo:number):Persona{
    return LISTA_PERSONAS.find(persona => persona.codigo === codigo);
  }

  annadirPersona(user:Persona){
    LISTA_PERSONAS.push(user);
  }


}
