import { Component, OnInit } from '@angular/core';
import {Hero} from'../hero'; // <-- importa la classe creata 

import {HeroService} from'../hero.service';
// collega lo stile dei component al file css presente
@Component({
  selector:'app-heroes',
  templateUrl:'./heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  /* Abbiamo aggiunto nella classe HeroesComponent un oggeto 
  hero importando la classe creata in precedenza, inizializzando le variabili*/
//definiamo la proprietà per il binding
selectedHero:Hero;
  heroes: Hero[];
// in  questo frammento di codice assegniamo l'eroe cliccato dallìutente al componente selectedHero

  constructor(private heroService:HeroService) { }
  //Angular chiama il costruttore dopo aver creato HerosComponent
  ngOnInit() {
    this.getHeroes();
  }
  // permette di recuperare gli eroi
  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes=> this.heroes= heroes);
  }
}

