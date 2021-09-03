import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
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
