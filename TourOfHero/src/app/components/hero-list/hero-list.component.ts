import { Component, OnInit, ViewChild, ElementRef  } from "@angular/core";
import { ObservableArray, ChangedData } from "@nativescript/core/data/observable-array";
import { HeroService } from "../../hero.service";
import { Page, Label, ListView } from "@nativescript/core";
import { Router } from "@angular/router";

@Component ({
    selector: "HeroList",
    templateUrl: "./hero-list.component.html",
    styleUrls: ["./hero-list.component.css"],
    providers: [HeroService],
})

export class HeroListComponent {
    heroes : Array<any>;

    constructor(public page:Page, private heroService: HeroService, private router: Router) {
        this.heroes = this.heroService.getHeroes()
    }

    refresh() {
        var listview : ListView = <ListView>this.page.getViewById("list-heroes");
        listview.refresh()
    }

    delete(id : number){
        this.heroService.deleteHero(id)
    }

    edit(id: number) {
        this.router.navigate(["/hero", id]);
    }
}