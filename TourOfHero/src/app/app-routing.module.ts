import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { HeroesComponent } from "./pages/heroes/heroes.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";

const routes: Routes = [
    { path:  '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
