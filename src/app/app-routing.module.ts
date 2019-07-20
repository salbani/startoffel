import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RateSaladComponent } from './pages/rate-salad/rate-salad.component';
import { HomeComponent } from './pages/home/home.component';
import { AddSaladComponent } from './pages/add-salad/add-salad.component';
import { SaladsComponent } from './pages/salads/salads.component';
import { EditSaladComponent } from './pages/edit-salad/edit-salad.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'rate',
    component: RateSaladComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddSaladComponent
  },
  {
    path: 'edit/:id',
    component: EditSaladComponent
  },
  {
    path: 'salads',
    component: SaladsComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
