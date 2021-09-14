import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ErrorComponent } from './page/error/error.component';
import { MenuPrincipalComponent } from './component/menu-principal/menu-principal.component';
import { AdministradorComponent } from './page/administrador/administrador.component';
import { DetailComponent } from './component/detail/detail.component';
import { FormsModule } from '@angular/forms';
import { QuienSoyComponent } from './component/quien-soy/quien-soy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    MenuPrincipalComponent,
    AdministradorComponent,
    DetailComponent,
    QuienSoyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
