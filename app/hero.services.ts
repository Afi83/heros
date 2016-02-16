import {Injectable} from 'angular2/core'
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
@Injectable()

export class HeroService{
    getHeroes(){
        return Promise.resolve(HEROES);
    }
    
    getHeroesSlowly() {
  return new Promise<Hero[]>(resolve =>
    setTimeout(()=>resolve(HEROES), 10000) // 2 seconds
  );
}
}