 
import { Component, OnInit } from "@angular/core";
import * as AppSettings from '@nativescript/core/application-settings'


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

    constructor(private  heroService : HeroService){

    }

    public ngOnInit(){

    }

    
    
}