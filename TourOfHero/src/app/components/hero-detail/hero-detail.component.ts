import { Component, OnInit, Input } from "@angular/core";

@Component ({
    selector: "HeroDetail",
    templateUrl: "./hero-detail.component.html",
})

export class HeroDetailComponent {
    id: number;
   name: string;
}