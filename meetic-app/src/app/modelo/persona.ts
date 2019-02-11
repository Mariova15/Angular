import { Interes } from './Interes';

export class Persona {
    //Obligatorios
    codigo:number;
    nombre:string;
    apellido:string;
    foto:string;
    edad:number;
    email:string;
    sexo:string;
    numVotos:number;
    //Opcionales
    direccion:string;
    ciudad:string;
    telefono:number;
    hijos:boolean;
    intereses:Array<Interes>;
    //persona: { codigo: number; nombre: string; foto: string; edad: number; email: string; sexo: string; numVotos: number; };

    constructor(codigo:number, nombre:string, foto:string, edad:number, email:string, sexo:string,
        direccion:string, ciudad?:string, telefono?:number, hijos?:boolean) {
        //Obligatorios
        this.codigo = codigo;
        this.nombre = nombre;
        this.foto = foto;
        this.edad = edad;
        this.edad = edad;
        this.email = email;
        this.sexo = sexo;
        this.numVotos = 0;
        this.intereses = [];
        //Opcionales
        if(direccion){
            this.direccion = direccion;
        }
        if(ciudad){
            this.ciudad = ciudad;
        }
        if(telefono){
            this.telefono = telefono;
        }
        if(hijos){
            this.hijos = hijos;
        }
    }
}
