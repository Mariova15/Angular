import { Injectable } from '@angular/core';
import { Persona } from './modelo/Persona';

const urlFoto:string = "https://openclipart.org/download/247324/abstract-user-flat-1.svg";

const LISTA_PERSONAS:Persona[]=[new Persona(0,"El","El",urlFoto,0,"string","string","string"),
new Persona(1,"La","La",urlFoto,0,"string","string","string"),
new Persona(2,"Lo","Lo",urlFoto,0,"string","string","string"),
new Persona(3,"He","He",urlFoto,0,"string","string","string"),
new Persona(4,"She","She",urlFoto,0,"string","string","string"),
new Persona(5,"It","It",urlFoto,0,"string","string","string")];

@Injectable({
  providedIn: 'root'
})
export class ListaUsuariosService {

  constructor() { }

  getListaPersonas():Persona[]{
    return LISTA_PERSONAS;
  }

  getPersona(nombre:string):Persona{
    return LISTA_PERSONAS.find(user => user.nombre === nombre);
  }

  annadirPersona(user:Persona){
    LISTA_PERSONAS.push(user);
  }


}
