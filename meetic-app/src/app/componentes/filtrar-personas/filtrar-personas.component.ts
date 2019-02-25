import { Component, OnInit } from "@angular/core";
import { ListaUsuariosService } from "src/app/lista-personas.service";

@Component({
  selector: "app-filtrar-personas",
  templateUrl: "./filtrar-personas.component.html",
  styleUrls: ["./filtrar-personas.component.css"]
})
export class FiltrarPersonasComponent implements OnInit {
  localidades: string[] = ["Sama", "La felguera", "El entrego"];
  intereses: string[] = ["Música", "Cine", "Deporte"];

  localidad: string;
  edadInicio: string;
  edadFin: string;
  interesesUser: string[];
  listatemp = [];

  constructor(private _servicioListaPersonas: ListaUsuariosService) {}

  ngOnInit() {}

  filtrar() {
    /*this._servicioListaPersonas.getListaPersonasFiltradaCompleto(this.localidad,this.interesesUser,
      Number(this.edadInicio), Number(this.edadFin));*/
     this.listatemp = this._servicioListaPersonas.getListaPersonasFiltradaCompleto(this.localidad,this.interesesUser,
        Number(this.edadInicio), Number(this.edadFin));
        alert(this.listatemp.length);
  }
}
