import { Injectable } from "@angular/core";
import { Persona } from "./modelo/Persona";
import { Interes } from "./modelo/Interes";

const urlFoto: string = "https://bit.ly/2sNhJiO";

let listaPersonasFiltradas: Persona[];
let ciudadToolbar: string;

//Interes de pruebaAPP
const LISTA_INTERESES: Interes[] = [
  new Interes("Deporte", "string", 5),
  new Interes("Fiesta", "string", 5),
  new Interes("Literatura", "string", 5)
];

const LISTA_PERSONAS: Persona[] = [
  new Persona(
    0,
    "Lisa",
    "Linke",
    urlFoto,
    37,
    "LisaJLinke@gmail.com",
    "Femenino",
    "Sama"
  ),
  new Persona(
    1,
    "Benildo",
    "Mendoza",
    urlFoto,
    27,
    "BenildoMendozaPatino@gmail.com",
    "Masculino",
    "La felguera"
  ),
  new Persona(
    2,
    "Jacob",
    "Pizarro",
    urlFoto,
    34,
    "JacobPizarroSotelo@gmail.com",
    "Masculino",
    "Sama"
  ),
  new Persona(
    3,
    "Mirabel",
    "Díaz",
    urlFoto,
    26,
    "MirabelDiaz@gmail.com",
    "Femenino",
    "La felguera"
  ),
  new Persona(
    4,
    "Sixto",
    "Ortega",
    urlFoto,
    22,
    "SixtoAltamiranoOrtega@gmail.com",
    "Masculino",
    "La felguera"
  ),
  new Persona(
    5,
    "Jacqueline",
    "Valentín",
    urlFoto,
    28,
    "JacquelineValentin@gmail.com",
    "Femenino",
    "Sama"
  )
];

const usuario: Persona = new Persona(
  0,
  "string",
  "string",
  urlFoto,
  0,
  "string",
  "string",
  "La felguera"
);

LISTA_INTERESES.forEach(interesAnnadir => {
  usuario.intereses.push(interesAnnadir);
  LISTA_PERSONAS.forEach(persona => {
    persona.intereses.push(interesAnnadir);
  });
});

//Interes para prueba de APP
LISTA_PERSONAS[3].intereses.push(new Interes("Música", "string", 5));
LISTA_PERSONAS[3].intereses.push(new Interes("Cine", "string", 5));
usuario.intereses.push(new Interes("Música", "string", 5));
usuario.intereses.push(new Interes("Cine", "string", 5));

@Injectable({
  providedIn: "root"
})
export class ListaUsuariosService {
  constructor() {}

  getListaPersonas(): Persona[] {
    return LISTA_PERSONAS;
  }

  getPersona(codigo: number): Persona {
    return LISTA_PERSONAS.find(persona => persona.codigo === codigo);
  }

  getUsuario(): Persona {
    return usuario;
  }

  getListaPersonasFiltradaPorciudad(nomciudad: string): Persona[] {
    listaPersonasFiltradas = [];

    LISTA_PERSONAS.forEach(persona => {
      if (persona.direccion === nomciudad) {
        listaPersonasFiltradas.push(persona);
      }
    });
    return listaPersonasFiltradas;
  }

  emparejar(): number {
    let compatibilidad = usuario.intereses.length * 0.8;
    let match = -2;
    LISTA_PERSONAS.forEach(persona => {
      if (persona.sexo != usuario.sexo) {
        let nivelCompatibilidad = 0;
        usuario.intereses.forEach(interesUsuario => {
          persona.intereses.forEach(interesPersona => {
            if (interesUsuario.nombreInteres == interesPersona.nombreInteres) {
              nivelCompatibilidad += 1;
            }
          });
        });
        if (nivelCompatibilidad >= compatibilidad) {
          match = persona.codigo;
        }
      }
    });
    return match;
  }

  getListaPersonasFiltradaCompleto(
    localidad?: string,
    interesUsuario?: string[],
    edadInicio?: number,
    edadFin?: number
  ): Persona[] {
    /*ciudadToolbar = localidad;
    listaPersonasFiltradas = [];
    LISTA_PERSONAS.forEach(persona => {
      if(persona.direccion == localidad){        
        if(persona.edad >= edadInicio && persona.edad <= edadFin){
          persona.intereses.forEach(interesPersona => {
            interesUsuario.forEach(interesUser => {
              if (interesUser === interesPersona.nombreInteres) {
                if (!listaPersonasFiltradas.includes(persona)) {
                  listaPersonasFiltradas.push(persona);
                }
              }
            });
          });
        }
      }
    });*/

    listaPersonasFiltradas = [];
    let listaPersonatemp = [];

    if (localidad) {
      ciudadToolbar = localidad;
      listaPersonasFiltradas = LISTA_PERSONAS.filter(
        personaFiltrarLocalidad =>
          personaFiltrarLocalidad.direccion == localidad
      );
    } else {
      ciudadToolbar = "Sin ciudad";
      listaPersonasFiltradas = LISTA_PERSONAS.slice(0);
    }

    if (interesUsuario) {
      listaPersonasFiltradas.forEach(personaFiltrarInteres => {
        interesUsuario.forEach(interesComprobar => {
          personaFiltrarInteres.intereses.forEach(interesesPersona => {
            if(interesComprobar == interesesPersona.nombreInteres){
              if(!listaPersonatemp.includes(personaFiltrarInteres)){
                listaPersonatemp.push(personaFiltrarInteres);
              };
            };
          });
        });
      });
      listaPersonasFiltradas = listaPersonatemp;
    }

    if(edadInicio && edadFin){
      listaPersonasFiltradas = listaPersonasFiltradas.filter(
        personaFiltrarEdad => personaFiltrarEdad.edad >= edadInicio && personaFiltrarEdad.edad <= edadFin)
    }

    return listaPersonasFiltradas;
  }

  eliminarFiltro() {
    listaPersonasFiltradas = LISTA_PERSONAS;
  }

  getListaPersonasFiltradas(): Persona[] {
    return listaPersonasFiltradas;
  }

  getLocalidades(): string[] {
    let localidades = [];
    LISTA_PERSONAS.forEach(persona => {
      if (!localidades.includes(persona.direccion)) {
        localidades.push(persona.direccion);
      }
    });
    return localidades;
  }

  getIntereses(): string[] {
    let intereses = [];
    LISTA_PERSONAS.forEach(persona => {
      persona.intereses.forEach(interes => {
        if (!intereses.includes(interes.nombreInteres)) {
          intereses.push(interes.nombreInteres);
        }
      });

      usuario.intereses.forEach(interesUsuario => {
        if (!intereses.includes(interesUsuario.nombreInteres)) {
          intereses.push(interesUsuario.nombreInteres);
        }
      });
    });
    return intereses;
  }

  getciudad(): string {
    if (ciudadToolbar == undefined) {
      ciudadToolbar = usuario.direccion;
    }
    return ciudadToolbar;
  }

  borrarCiudad() {
    ciudadToolbar = "Sin ciudad";
  }
}
