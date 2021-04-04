import { Component, OnInit, Input } from "@angular/core";
import { Hero } from '../../hero';
import { HeroService } from "../../hero.service";
import { NgModule } from "@angular/core";

@Component ({
    selector: "AddHero",
    templateUrl: "./add-hero.component.html",
    providers: [HeroService],
})

export class AddHeroComponent {
    hero_name : string;

    constructor(private heroService : HeroService) { }

    addHero() {
        if (this.hero_name != undefined || this.hero_name != null) { // have input in text field
            this.heroService.addHero(this.hero_name)
            this.hero_name = '' // clear text field
        }
    }
}