import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

import { CardListComponent } from './components/card-list/card-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from "./components/register/register.component";
import { HomeComponent } from './components/home/home.component';
import {AddFlowerComponent} from "./components/add-flower/add-flower.component";

const routes: Routes = [
  {path : "", component : HomeComponent,},
  {path : "store", component : CardListComponent},
  {path : "log-in", component : LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'store/addFlower', component: AddFlowerComponent},
  {path : "shopping-cart", component : ShoppingCartComponent},
  {path : '**', redirectTo: ""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
