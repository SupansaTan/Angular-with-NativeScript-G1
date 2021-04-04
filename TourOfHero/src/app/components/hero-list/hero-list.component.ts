import { Component, OnInit } from "@angular/core";
import { HEROES } from '../../mock-heroes';
import { HeroService } from "../../hero.service";
import { Hero } from "../../hero"

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