import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { NativeScriptRouterModule } from "@nativescript/angular";
import { from } from "rxjs";

const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'products/:productId', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
