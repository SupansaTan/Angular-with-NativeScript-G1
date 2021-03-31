import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";
import { PageDirective } from "./page.directive";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component"
import { TopBarComponent } from "./components/top-bar/top-bar.component"
import { HeroListComponent } from "./components/hero-list/hero-list.component"
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component"
import { AddHeroComponent } from "./components/add-hero/add-hero.component"
import { HeroesComponent } from "./pages/heroes/heroes.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        PageDirective,
        AppComponent,
        DashboardComponent,
        TopBarComponent,
        HeroListComponent,
        HeroDetailComponent,
        AddHeroComponent,
        HeroesComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
