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
import { SpinnerComponent } from './component/spinner/spinner.component';
import { CarosuelComponent } from './component/carosuel/carosuel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    MenuPrincipalComponent,
    AdministradorComponent,
    DetailComponent,
    QuienSoyComponent,
    SpinnerComponent,
    CarosuelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
