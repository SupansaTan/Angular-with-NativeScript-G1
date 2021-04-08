import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router'
@Component ({
    selector: "TopBar",
    templateUrl: "./top-bar.component.html",
    styleUrls: ["./top-bar.component.css"]
})

export class TopBarComponent {
    constructor(private router: Router){

    }

    public ngOnInit(){

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