import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {ErrorComponent} from './page/error/error.component';
import {AdministradorComponent} from './page/administrador/administrador.component';
import {QuienSoyComponent} from './component/quien-soy/quien-soy.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'admin',
    component: AdministradorComponent
  },
  {
    path:'quien-soy',
    component: QuienSoyComponent
  },
  // {
  //   path:'casa',
  //   component: HomeComponent
  // },
  // {
  //   path:'ingreso',
  //   component: LoginComponent
  // },
  {
    path:'',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
    path:'**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
