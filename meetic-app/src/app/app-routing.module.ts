import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaDetalleComponent } from './componentes/persona/persona-detalle/persona-detalle.component';
import { ListaPersonasComponent } from './componentes/persona/lista-personas/lista-personas.component';
import { CrearInteresComponent } from './componentes/interes/crear-interes/crear-interes.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:ListaPersonasComponent},
  {path:'lista-personas',component:ListaPersonasComponent},
  {path:'crear-interes/:persona',component:CrearInteresComponent},
  {path:'lista-personas/:info', component:PersonaDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
