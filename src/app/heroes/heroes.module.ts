import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { HeroesService } from './services/heroes.service';
import { CardComponent } from './components/card/card.component';
import { HeroesImagePipe } from './pipes/heroes-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogueComponent } from './components/confirm-dialogue/confirm-dialogue.component';


@NgModule({
  providers: [
    HeroesService
  ],
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,
    HeroesImagePipe,
    ConfirmDialogueComponent,

  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
