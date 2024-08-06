import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '' ,
    component:SideBarComponent
},
  {
    path: 'product' ,
    component:ProductPageComponent,
    children:[
     { path:'product/productList',
      component:ProductListComponent
    },
    ]
},  {
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
