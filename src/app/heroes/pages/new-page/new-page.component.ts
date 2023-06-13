import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Publisher, Hero } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('',{nonNullable: true} ),
    publisher: new FormControl <Publisher> (Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appea: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  })

  public publishers = [
    { id: 'DC Comics', description: 'DC - Comics' },
    { id: 'Marvel Comics', description: 'Marvel - Comics' }
  ]

  constructor(private heroesService: HeroesService){}

  get currentHero():Hero{
    const hero = this.heroForm.value as Hero
    return hero
  }

  onSubmit(){
    /* console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.value
    }); */
    if(this.heroForm.invalid) return
    /* this.heroesService.updateHero(this.heroForm.value) */
  }

  

}
