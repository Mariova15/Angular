import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import { MatToolbarModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { PersonaComponentComponent } from './persona-component/persona-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ListaUsuariosComponent,
    PersonaComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
