import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  changeHero(): void{
    this.name = 'spiderman';
  }



  changeAge(){
    this.age = 25;
  }

  resetForm(){
    this.name = 'ironman';
    this.age = 45;
  }
  get capitalizedName(): string{
    return this.name.toUpperCase() ;
  }

  getHeroDescription(): string{
    return `${this.name} tiene ${this.age} años`;
  }



}

  //JAH BLESS, los getters es una propiedad a pesar de ser
  //JAH BLESS, método de clase impresionante que visaje
/**
 JAH BLESS
  get capitalizedName(): number{
    this.num2 = 2 + 2;
    return this.num2 ;
  }
 */

  //JAH BLESS, SE USA El
/*JAH BLESS
changeAge(){
  //JAH BLESS, esto sirve como todo o sea que me tire error si no lo he declarado
    throw new Error('Method not implemented.');

  }
 *
 */

//JAH BLESS, si lo pongo private solo lo va a poder acceder la clase
  //JAH BLESS, es decir mi html ni nada más podrá usar el private fuera del script


  //JAH BLESS, los getters se ven como propiedades pero
  //JAH BLESS, los morados al parecer son metodos y los azules
  //JAH BLESS, son propiedades. Entonces los getters son
  //JAH BLESS, propiedades que se comportan como funciones
  //JAH BLESS, pero no son métodos. Los métodos se llaman con
  //JAH BLESS, parentesis y las propiedades no. Entonces
  //JAH BLESS, los getters son propiedades que se comportan
  //JAH BLESS, como funciones
  //JAH BLESS,son funciones simples
  //JAH BLESS, los getters son una propiedad a pesar de ser
  //JAH BLESS, método de clase. Ush tremendo. Entonces
  //JAH BLESS, uy no que gonorrea parce wtf son funciones
  //JAH BLESS, como variables. Muy impresionante la verdad
  //JAH BLESS, entonces si quiero hacer rápido algo
    //JAH BLESS, pues nada solo hago el get
      //JAH BLESS, ya se lo culio a react
