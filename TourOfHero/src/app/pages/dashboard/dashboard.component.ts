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
    heroes: Array<any>;
    top_heroes: Array<any>;
    searchPhrase: string;
    private searchTerms = new Subject<string>();

    constructor(private router:Router, private heroService : HeroService ) { 
        this.heroes = heroService.getHeroes()
        this.top_heroes = this.heroes.slice(0,4)
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

    searchHeroes(term) {
        const searchBar = term.object;
        let hero = this.heroService.searchHeroes(searchBar.text)
        this.router.navigate(['/detail', hero.id ]);
    }

    /* buttons of top heroes */
    toDetail(id) {
        this.router.navigate(['/detail', id ]);
    }
    public onIndexChanged(title : string) {
        if (title == 'dashboard') {
            this.router.navigate(['/dashboard'])
        }
        else if (title == 'heroes') {
            this.router.navigate(['/heroes'])
        }
    }
}