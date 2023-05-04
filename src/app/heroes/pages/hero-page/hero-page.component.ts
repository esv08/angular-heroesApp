import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

//services
import { HeroesService } from '../../services/heroes.service';
//interfaces
import { Hero } from '../../interfaces/hero.interface';



@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: [
  ]
})
export class HeroPageComponent implements OnInit {

  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,      //funcion del modulo router de angular
    private router: Router
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(1000),
        switchMap( ({id}) => this.heroesService.getHeroById(id)),
        )
      .subscribe( hero => {
        if ( !hero ) return this.router.navigate(['heroes/list']);    //si no pasa esta condicion es porque existe el heroe(id)
        this.hero = hero;
        return;
      })
  }

  goBack(): void {
    this.router.navigateByUrl('heroes/list')
  }
}
