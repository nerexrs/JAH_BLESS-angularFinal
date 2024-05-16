import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['ironman', 'spiderman', 'thor', 'hulk', 'black widow'];
  public deletedHero?: string;

  //JAH BLESS, recuerda que cuando hago un pop devuelve
  //JAH BLESS, el valor eliminado
  //JAH BLESS, entonces en este caso le digo que la variable
  //JAH BLESS, deletedHero va a ser igual a lo que se elimine
  //JAH BLESS, de heroNames pero inicialmente no hay nada
  //JAH BLESS, entonces es opcional por eso el signo de interrogación
//JAH BLESS, tremendo ya tiene un crud
  removeLastHero(): void{
    this.deletedHero = this.heroNames.pop();
  }

  recoverHero(): void{
  this.heroNames = ['ironman', 'spiderman', 'thor', 'hulk', 'black widow'];


  }

}
