import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as AppSettings from '@nativescript/core/application-settings'

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes = [];

  constructor() { 
    this.heroes = HEROES;
  }

  setHeroes(args) {
    this.heroes = args;
  }

  getHeroes() {
    return this.heroes;
  }

  getHero(id: number) {
    return this.heroes[id];
  }

  updateHero(hero_name : string) {
    if (this.heroes.find(x => x.name == hero_name) == undefined){ // hero_name not contain in heroes
      const last_id = this.heroes[this.heroes.length-1]['id']
      this.heroes.push({id: last_id+1, name: hero_name})
    }
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
    this.heroes.filter(x => x.name == term)[0];
  }
}
