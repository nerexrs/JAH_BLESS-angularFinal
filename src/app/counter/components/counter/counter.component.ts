import { Component } from "@angular/core";

//JAH BLESS, es más fácil que react que visaje
//JAH BLESS, talvez es más largo pero es demasiado fácil
//JAH BLESS, con el snippet a- ya puedo crear muchas cosas
//JAH BLESS, enserio que impresionante porque con el use State
//JAH BLESS, o con lo de tener que crear una función completa uy
//JAH BLESS, paila. Con baticks, comillas invertidas
//JAH BLESS, puedo hacer html multilinea
@Component({
  selector: 'app-counter',
  template: `
  <h1>
  {{ title}}

</h1>
<hr>
<p>
  counter:  {{ counter}}
</p>
<!-- JAH BLESS, los parentesis es para los eventos que emite
un elemento html, en este caso el botón y me interesa el click.
Aún nada raro de onClick o eventos. Si llamas a tu componente dentro de tu componente no se va a renderizar, primer error  -->
<button (click)="increasedBy(1)">counter +</button>
<button (click)="resetCount()">Reset</button>
<button (click)="increasedBy(-1)">counter -</button>

<hr>


  `
})
export class CounterComponent {
  public title: string = 'JAAAH BLESS';
  public counter: number = 0;


  increasedBy(value: number): void{
    this.counter += value;
  }


  resetCount(){
    this.counter = 0;
  }

}
