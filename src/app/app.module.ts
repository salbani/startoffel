import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AddSaladComponent } from './pages/add-salad/add-salad.component';
import { RateSaladComponent } from './pages/rate-salad/rate-salad.component';
import { RatingComponent } from './common/rating/rating.component';
import { PotatoComponent } from './icon/potato/potato.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { SaladService } from './services/salad.service';
import { SaladComponent } from './common/salad/salad.component';
import { SaladsComponent } from './pages/salads/salads.component';
import { EditSaladComponent } from './pages/edit-salad/edit-salad.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddSaladComponent,
    RateSaladComponent,
    RatingComponent,
    PotatoComponent,
    SaladComponent,
    SaladsComponent,
    EditSaladComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, SaladService],
  bootstrap: [AppComponent]
})
export class AppModule { }
