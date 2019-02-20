import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaDetalleComponent } from './componentes/persona/persona-detalle/persona-detalle.component';
import { ListaPersonasComponent } from './componentes/persona/lista-personas/lista-personas.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:ListaPersonasComponent},
  {path:'lista-usuarios',component:ListaPersonasComponent},
  {path:'lista-usuarios/:info', component:PersonaDetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
