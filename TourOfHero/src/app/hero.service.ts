import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as AppSettings from '@nativescript/core/application-settings'

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes : Hero[];

  constructor() { 
    const isFirst = AppSettings.getBoolean("isFirst");

    if(isFirst == null || isFirst == undefined){
      this.heroes = HEROES;
      AppSettings.setString("HeroesData", JSON.stringify(HEROES));
      AppSettings.setBoolean("isFirst", false)
    }
    else {
      this.heroes = JSON.parse(AppSettings.getString("HeroesData"));
    }
  }

  getLength() { 
    return this.heroes.length
  }

  getHeroes() {
    return this.heroes;
  }

  getHero(id: number) {
    return this.heroes[id];
  }

  addHero(hero_name : string) {
    if (this.heroes.find(x => x.name == hero_name) == undefined){ // hero_name not contain in heroes
      const last_id = this.heroes[this.heroes.length-1]['id']
      this.heroes.push({id: last_id+1, name: hero_name})
      AppSettings.setString("HeroesData", JSON.stringify(this.heroes))
    }
  }

  deleteHero(hero: Hero | number) {
     
  }

  searchHeroes(term: string) {
    return this.heroes.filter(x => x.name == term)[0];
  }
}