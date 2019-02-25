import { Injectable } from '@angular/core';
import { Persona } from './modelo/Persona';
import { Interes } from './modelo/Interes';

const urlFoto:string = "https://bit.ly/2sNhJiO";

let listaPersonasFiltradas:Persona[];

const interes:Interes = new Interes("Música","string",5);

const LISTA_PERSONAS:Persona[]=[new Persona(0,"Lisa","Linke",urlFoto,37,"LisaJLinke@gmail.com","Femenino","Sama"),
new Persona(1,"Benildo","Mendoza",urlFoto,27,"BenildoMendozaPatino@gmail.com","Masculino","La felguera"),
new Persona(2,"Jacob","Pizarro",urlFoto,34,"JacobPizarroSotelo@gmail.com","Masculino","Sama"),
new Persona(3,"Mirabel","Díaz",urlFoto,26,"MirabelDiaz@gmail.com","Femenino","La felguera"),
new Persona(4,"Sixto","Ortega",urlFoto,22,"SixtoAltamiranoOrtega@gmail.com","Masculino","La felguera"),
new Persona(5,"Jacqueline","Valentín",urlFoto,28,"JacquelineValentin@gmail.com","Femenino","Sama")];

const usuario:Persona = new Persona(0,"string","string",urlFoto,0,"string","string","La felguera");

LISTA_PERSONAS[3].intereses.push(interes);

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

  getUsuario():Persona{
    return usuario;
  }

  getListaPersonasFiltradaPorciudad(nomciudad:string):Persona[]{
    listaPersonasFiltradas = [];

    LISTA_PERSONAS.forEach(persona => {
      if(persona.direccion === nomciudad){
        listaPersonasFiltradas.push(persona);
      }
    });    
    return listaPersonasFiltradas;
  }

  getListaPersonasFiltradaCompleto(localidad:string, interesUsuario:string[], 
    edadInicio:number, edadFin:number):Persona[]{
    listaPersonasFiltradas = [];

    LISTA_PERSONAS.forEach(persona => {

      if(localidad === persona.direccion){
        if(!listaPersonasFiltradas.includes(persona)){
          listaPersonasFiltradas.push(persona);
        } 
      }

      if(persona.edad >= edadInicio && persona.edad <= edadFin){
        if(!listaPersonasFiltradas.includes(persona)){
          listaPersonasFiltradas.push(persona);
        } 
      }

      persona.intereses.forEach(interesPersona => {
        interesUsuario.forEach(interesUser => {
          if(interesUser === interesPersona.nombreInteres){
              if(!listaPersonasFiltradas.includes(persona)){
              listaPersonasFiltradas.push(persona);
            }            
          }
        });
      });
    });    
    return listaPersonasFiltradas;
  }

  getListaPersonasFiltradas():Persona[]{
    return listaPersonasFiltradas;
  }

}
