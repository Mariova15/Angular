import { Injectable } from '@angular/core';
import { Persona } from './modelo/Persona';

const LISTA_PERSONAS:Persona[]=[new Persona(0,"string","string",0,"string","string","string"),
new Persona(0,"string","string",0,"string","string","string"),
new Persona(0,"string","string",0,"string","string","string"),
new Persona(0,"string","string",0,"string","string","string"),
new Persona(0,"string","string",0,"string","string","string"),
new Persona(0,"string","string",0,"string","string","string")];

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
