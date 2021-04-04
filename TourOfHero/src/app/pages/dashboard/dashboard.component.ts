import {Component, OnInit, Input, Output } from "@angular/core";
import { Hero } from '../../hero';
import { HEROES } from '../../mock-heroes';
import { HeroService } from '../../hero.service';
import { debounceTime, distinctUntilChanged, switchMap, catchError, tap } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';
import { Router } from "@angular/router";

@Component ({
    selector: "Dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"]
})

export class DashboardComponent implements OnInit{
    heroes: Hero[];
    top_heroes: Hero[];
    searchPhrase: string;
    private searchTerms = new Subject<string>();

    constructor(private router:Router, heroService : HeroService ) { 
        this.heroes = heroService.getHeroes()
        this.top_heroes = this.heroes.slice(1,5)
    }

    ngOnInit(){
        
    }

    /* methods for search bar */
    onSubmit(term: string) {
        this.searchTerms.next(term);
    }

    onTextChanged(args) {
        const searchBar = args.object;
        console.log(`Input changed! New value: ${searchBar.text}`);
    }

    searchHeroes(term: string) {
        Object.keys(this.heroes).forEach(key => {
            if (this.heroes[key].name === term) {
                this.router.navigate(['/detail', this.heroes[key].id ]);
            }
        });
    }

    /* buttons of top heroes */
    toDetail(id) {
        this.router.navigate(['/detail', id ]);
    }
}