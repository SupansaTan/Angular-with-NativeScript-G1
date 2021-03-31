import {Component, OnInit } from "@angular/core";
import { HEROES } from '../../mock-heroes';

@Component ({
    selector: "Heroes",
    templateUrl: "./heroes.component.html",
})

export class HeroesComponent {
    heroes = HEROES;
}