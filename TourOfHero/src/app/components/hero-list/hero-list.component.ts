import { Component, OnInit } from "@angular/core";
import { HEROES } from '../../mock-heroes';

@Component ({
    selector: "HeroList",
    templateUrl: "./hero-list.component.html",
})

export class HeroListComponent {
    heroes = HEROES;
}