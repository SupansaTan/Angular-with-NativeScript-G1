import { Component, OnInit, ViewChild, ElementRef  } from "@angular/core";
import { HEROES } from '../../mock-heroes';
import { HeroService } from "../../hero.service";
import { Hero } from "../../hero"
import { Label, ListView } from "@nativescript/core";

@Component ({
    selector: "HeroList",
    templateUrl: "./hero-list.component.html",
    providers: [HeroService],
})

export class HeroListComponent {
    heroes : Hero[];

    constructor(private heroService: HeroService) {
        this.heroes = this.heroService.getHeroes()
    }
}