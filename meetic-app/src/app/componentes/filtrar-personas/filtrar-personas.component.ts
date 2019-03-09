import { Component, OnInit } from "@angular/core";
import { ListaUsuariosService } from "src/app/lista-personas.service";
import { Location } from '@angular/common' ;

@Component({
  selector: "app-filtrar-personas",
  templateUrl: "./filtrar-personas.component.html",
  styleUrls: ["./filtrar-personas.component.css"]
})
export class FiltrarPersonasComponent implements OnInit {

  private localidades: string[];
  private intereses: string[];

  private localidadUser: string;
  private edadInicio: string;
  private edadFin: string;
  private interesesUser: string[];

  constructor(private _servicioListaPersonas: ListaUsuariosService, private _location: Location) {}

  ngOnInit() {

    this.localidades = this._servicioListaPersonas.getLocalidades();
    this.intereses = this._servicioListaPersonas.getIntereses();

  }

  filtrar() {
    this._servicioListaPersonas.getListaPersonasFiltradaCompleto(this.localidadUser,this.interesesUser,
        Number(this.edadInicio), Number(this.edadFin));
        this._location.back();
        
  }
  eliminarFiltro(){
    this._servicioListaPersonas.eliminarFiltro();
    this._servicioListaPersonas.borrarCiudad();
    this._location.back();
  }
}
