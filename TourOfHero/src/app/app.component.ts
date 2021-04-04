import { Component, OnInit } from "@angular/core";
import * as AppSettings from '@nativescript/core/application-settings'
import { Router } from '@angular/router'

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { HeroService } from "./hero.service";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})

export class AppComponent implements  OnInit{ 
    heroes: Hero[];

    constructor(private router: Router, heroService : HeroService){
        const isFirst = AppSettings.getBoolean("isFirst")

        if(isFirst == null){
            this.heroes = HEROES
            AppSettings.setString("HeroesData", JSON.stringify(HEROES))
            AppSettings.setBoolean("isFirst", false)
        }
        else {
            this.heroes = JSON.parse(AppSettings.getString("HeroesData"))
            heroService.setHeroes(this.heroes)
        }
    }

    public ngOnInit(){
       
    }

    public onIndexChanged(title : string) {
        if (title == 'dashboard') {
            this.router.navigate(['/dashboard'])
        }
        else if (title == 'heroes') {
            this.router.navigate(['/heroes'])
        }
    }
}
