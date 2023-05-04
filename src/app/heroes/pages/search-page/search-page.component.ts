import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';

//services
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    ){}

  searchHero() {
    const value: string = this.searchInput.value || '';     //variable que extrae el valor que tiene el input, si no hay resultado pone un string vacio
    this.heroesService.getSuggestions(value)
      .subscribe( heroes => this.heroes = heroes );
  }

  onSelectedOption(event: MatAutocompleteActivatedEvent): void {
    if (!event.option?.value){               //valida si no hay nada en el input regresa undefined
      this.selectedHero = undefined;
      return;}

    const hero: Hero = event.option.value;      //extrae el valor del input y lo suscribe en la variable selectedHero
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
    this.router.navigate([`heroes/${this.selectedHero.id}`]);
  };

}
