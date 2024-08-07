import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '' ,
    component:SideBarComponent
},
  {
    path: 'orders' ,
    component:CartComponent
},
  {
    path: 'signin' ,
    component:SigninComponent
},
  {
    path: 'signup' ,
    component:SignupComponent
},
  {
    path: 'customers' ,
    component:UsersComponent
},
  {
    path: 'settings' ,
    component:SettingsComponent
},
  {
    path: 'support' ,
    component:SupportComponent
},
//   {
//     path: 'product-page' ,
//     component:prod
// },
  {
    path: 'product' ,
    component:ProductPageComponent,
    children:[
     { path:'productList',
      component:ProductListComponent
    },
    ]
},
  {
  path: '**' ,
  component:PageNotFoundComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
  
}
// {
//     path: '',
//     component:LayoutComponent,
//     children: [
// {
//         path:'dashboard',
//         component:DashboardComponent,   
//         canActivate:[authGuard] 
//    }
//     ]
// },
