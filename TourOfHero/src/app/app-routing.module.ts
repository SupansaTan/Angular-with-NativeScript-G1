import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { HeroesComponent } from "./pages/heroes/heroes.component";

const routes: Routes = [
    { path:  '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'heroes', component: HeroesComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
