import { NgModule } from "@angular/core";
import { CounterComponent } from "./counter.component";
//JAH BLESS, un modulo no necesita declaraciones, pero son estas las que le permiten usar los components
//JAH BLESS, podemos usar mi modulo en todo el scope de la carpeta. Pero si lo quiero usar
//JAH BLESS, en otra parte donde sea. Fuera del components, lo tenemos que exportar el componente
//JAH BLESS, en el modulo. Y despué
@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
   ]
})
export class CounterModule {}
