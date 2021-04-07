import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Hero } from "~/app/hero";
import { HeroService } from "../../hero.service";
@Component ({
    selector: "HeroDetail",
    templateUrl: "./hero-detail.component.html",
})

export class HeroDetailComponent {
    hero;
   constructor(private route: ActivatedRoute,
               private heroService: HeroService) {}
   ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.hero = this.heroService.getHero(id);
    console.log(this.hero);
  }

}