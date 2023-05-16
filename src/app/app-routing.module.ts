import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

import { AddProductComponent } from './Components/addProduct/addProduct.component';
import { ProductsComponent } from './Components/products/products.component';
import { EditProductComponent } from './Components/edit-product/edit-product.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:'home',component:HomeComponent,title:"home-Home Page"},
  {path:"about",component:AboutUsComponent,title:""},
  {path:"contact",component:ContactUsComponent},
  {path:"login",component:LoginComponent},//canActivate this to give access to who can go to this page
  {path:"register",component:RegisterComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"product/:id",component:ProductsComponent},
  {path:"edit-product/:id",component:EditProductComponent},

  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
