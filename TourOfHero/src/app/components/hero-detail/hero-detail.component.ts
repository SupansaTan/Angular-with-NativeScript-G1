import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { Hero } from "~/app/hero";
import { HeroService } from "../../hero.service";
import { Location} from "@angular/common";

@Component ({
    selector: "HeroDetail",
    templateUrl: "./hero-detail.component.html",
})

export class HeroDetailComponent {
    hero;
    hero_name:string;
   constructor(private route: ActivatedRoute,
               private heroService: HeroService,
               private location: Location) {}
   ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.hero = this.heroService.getHero(id);
  }
  save(id,hero_name){
    this.heroService.save(id,hero_name);
    this.location.back();
  }
  back(){
      this.location.back();
  }

}