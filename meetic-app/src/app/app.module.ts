import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './componentes/navigation-bar/navigation-bar.component';

import { MatToolbarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material';

import { ListaPersonasComponent } from './componentes/persona/lista-personas/lista-personas.component';
import { PersonaListaComponent } from './componentes/persona/persona-lista/persona-lista.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ListaPersonasComponent,
    PersonaListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
