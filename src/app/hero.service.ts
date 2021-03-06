import { Injectable } from '@angular/core';
import {Hero} from'./hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from'rxjs';
import {MessageService} from'./message.service';
//iniezione delle dipendenze
@Injectable({  providedIn: 'root'})
export class HeroService {

  constructor(private messageService:MessageService) { }
 
getHeroes(): Observable<Hero[]>{
this.messageService.add('HewroService:fatched heroes');
  return of(HEROES);
}
getHero(id: number): Observable<Hero> {
this.messageService.add('HeroService: fotched hero id=${id}');
return of(HEROES.find(hero => hero.id === id));
}
}
