import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {LoginGuard} from "./login.guard";

const routes: Routes = [
  {
    path: "details/:id",
    component: ProductDetailsComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "all",
    component: ProductListComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "all"
  },
  {
    path: "details",
    pathMatch: "full",
    redirectTo: "all"
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
