import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonaDetalleComponent } from "./componentes/persona/persona-detalle/persona-detalle.component";
import { ListaPersonasComponent } from "./componentes/persona/lista-personas/lista-personas.component";
import { CrearInteresComponent } from "./componentes/interes/crear-interes/crear-interes.component";
import { FiltrarPersonasComponent } from './componentes/filtrar-personas/filtrar-personas.component';
import { MandarEmailComponent } from './componentes/mandar-email/mandar-email.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ListaPersonasComponent },
  { path: "lista-personas", component: ListaPersonasComponent },
  { path: "filtrar-personas", component: FiltrarPersonasComponent },
  { path: "mandar-email/:destinatario", component: MandarEmailComponent },
  { path: "crear-interes/:persona", component: CrearInteresComponent },
  { path: "detalle-persona/:info", component: PersonaDetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
