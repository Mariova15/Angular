import { Component, OnInit } from "@angular/core";
import { ListaUsuariosService } from "src/app/lista-personas.service";

@Component({
  selector: "app-filtrar-personas",
  templateUrl: "./filtrar-personas.component.html",
  styleUrls: ["./filtrar-personas.component.css"]
})
export class FiltrarPersonasComponent implements OnInit {
  localidades: string[] = ["Sama", "La felguera", "El entrego"];
  intereses: string[] = ["Música", "Cine", "Deporte","Literatura"];

  localidadUser: string;
  edadInicio: string;
  edadFin: string;
  interesesUser: string[];

  constructor(private _servicioListaPersonas: ListaUsuariosService) {}

  ngOnInit() {}

  filtrar() {
    alert(this.localidadUser);
    this._servicioListaPersonas.getListaPersonasFiltradaCompleto(this.localidadUser,this.interesesUser,
        Number(this.edadInicio), Number(this.edadFin));
        
  }
  eliminarFiltro(){
    this._servicioListaPersonas.eliminarFiltro();
  }
}
