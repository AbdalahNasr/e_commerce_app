import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';
import { UsersComponent } from './users/users.component';
import { CommonModule } from '@angular/common';
import { FormGroup, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { FooterComponent } from './footer/footer.component';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';
import { ClientLoginPageComponent } from './client-login-page/client-login-page.component';
import {HttpClientModule  } from "@angular/common/http";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoadigComponent } from './loadig/loadig.component';
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ProductListComponent,
    ProductPageComponent,
    PageNotFoundComponent,
    CartComponent,
    SigninComponent,
    SignupComponent,
    SettingsComponent,
    SupportComponent,
    UsersComponent,
    AddProductComponent,
    NavbarComponentComponent,
    FooterComponent,
    ClientHomePageComponent,
    ClientLoginPageComponent,
    ProductDetailsComponent,
    LoadigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
