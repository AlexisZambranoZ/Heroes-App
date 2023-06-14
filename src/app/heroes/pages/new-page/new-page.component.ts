import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Publisher, Hero } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appea: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  })

  public publishers = [
    { id: 'DC Comics', description: 'DC - Comics' },
    { id: 'Marvel Comics', description: 'Marvel - Comics' }
  ]

  constructor(private heroesService: HeroesService,
              private ACTIVATEDrOUTE: ActivatedRoute,
              private router: Router) { }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero
    return hero
  }

  ngOnInit(): void {

  }

  onSubmit() {
    /* console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.value
    }); */
    if (this.heroForm.invalid) return

    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero).subscribe(hero => {
        //Mostrar snackbar
      })

      return
    }

    this.heroesService.addHero(this.currentHero)
      .subscribe(hero => {
        //Mostrar snackbar y navegar a /heroes/edit/hero.id
      })

    /* this.heroesService.updateHero(this.heroForm.value) */
  }



}
