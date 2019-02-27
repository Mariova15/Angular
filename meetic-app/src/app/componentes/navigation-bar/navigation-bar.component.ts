import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common' ;
import { ListaUsuariosService } from 'src/app/lista-personas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})

export class NavigationBarComponent implements OnInit {

  @Input() estado:boolean;
  @Input() nomCiudad:string;
  @Input() contador:string;
  resultadoemparejar:number;

  constructor(private _location: Location, private _servicioListaPersonas:ListaUsuariosService,
     private router: Router) { }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }

  emparejar(){
    this.resultadoemparejar = this._servicioListaPersonas.emparejar();
    alert(this.resultadoemparejar);
    this.router.navigate(['/detalle-persona', this.resultadoemparejar]);
  }

}
