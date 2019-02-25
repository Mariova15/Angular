import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './componentes/navigation-bar/navigation-bar.component';

import { MatToolbarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material';
import {MatIcon} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';

import { ListaPersonasComponent } from './componentes/persona/lista-personas/lista-personas.component';
import { PersonaListaComponent } from './componentes/persona/persona-lista/persona-lista.component';
import { PersonaDetalleComponent } from './componentes/persona/persona-detalle/persona-detalle.component';
import { ListaInteresesComponent } from './componentes/interes/lista-intereses/lista-intereses.component';
import { CrearInteresComponent } from './componentes/interes/crear-interes/crear-interes.component';
import { InteresListaComponent } from './componentes/interes/interes-lista/interes-lista.component';
import { FiltrarPersonasComponent } from './componentes/filtrar-personas/filtrar-personas.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MatIcon,
    ListaPersonasComponent,
    PersonaListaComponent,
    PersonaDetalleComponent,    
    ListaInteresesComponent,
    CrearInteresComponent,
    InteresListaComponent,
    FiltrarPersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSliderModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
