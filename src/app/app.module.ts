import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { UserformComponent } from './shared/components/userform/userform.component';
import { Consumer1Component } from './shared/components/consumer1/consumer1.component';
import { Consumer2Component } from './shared/components/consumer2/consumer2.component';
import { Consumer3Component } from './shared/components/consumer3/consumer3.component';
import { CardComponent } from './shared/components/card/card.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    UserformComponent,
    Consumer1Component,
    Consumer2Component,
    Consumer3Component,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
