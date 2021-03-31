import {Component, OnInit } from "@angular/core";
import { Hero } from '../../hero';
import { HEROES } from '../../mock-heroes';

@Component ({
    selector: "Dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"]
})

export class DashboardComponent {
    heroes = HEROES.slice(1,5);
    searchPhrase: string;

    /* methods for search bar */
    onSubmit(args) {
        const searchBar = args.object;
        console.log(`Searching for ${searchBar.text}`);
    }

    onTextChanged(args) {
        const searchBar = args.object;
        console.log(`Input changed! New value: ${searchBar.text}`);
    }

    onClear(args) {
        const searchBar = args.object;
        console.log(`Clear event raised`);
    }

    onTap(id) {

    }
}