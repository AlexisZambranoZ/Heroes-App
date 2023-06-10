import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl
  public selectedHero? : Hero
  public heroes: Hero[] = []

  constructor(private heroesService: HeroesService) {

  }

  searchHeroe(){
    const value : string = this.searchInput.value || ''
    console.log( {value});
    this.heroesService.getSuggestions(value).subscribe(heroes => this.heroes = heroes)
  }
  
  onSelectedOption( event: MatAutocompleteSelectedEvent  ){
    console.log(event.option.value);
    if(!event.option.value){
      this.selectedHero = undefined
      return
    }
    const hero: Hero = event.option.value
    this.searchInput.setValue(hero.superhero)
    this.selectedHero = hero
    console.log(hero);
  }
}
