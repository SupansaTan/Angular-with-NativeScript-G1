import { Component } from "@angular/core";
import * as AppSettings from '@nativescript/core/application-settings'

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})

export class AppComponent { 
    heroes: Hero[];

    constructor(){
        const isFirst = AppSettings.getBoolean("isFirst")

        if(isFirst == null){
            this.heroes = HEROES
            AppSettings.setString("HeroesData", JSON.stringify(HEROES))
            AppSettings.setBoolean("isFirst", false)
            alert("Run first time")
        }
        else {
            this.heroes = JSON.parse(AppSettings.getString("HeroesData"))
        }
    }

    public ngOnInit(){

    }
}
