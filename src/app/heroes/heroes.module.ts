import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
//JAH BLESS, un modulo no necesita declaraciones, pero son estas las que le permiten usar los components
//JAH BLESS, podemos usar mi modulo en todo el scope de la carpeta. Pero si lo quiero usar
//JAH BLESS, en otra parte donde sea. Fuera del components, lo tenemos que exportar el componente
//JAH BLESS, en el modulo. Lo del export es lo que me permite a mí después acceder a las partes de
//JAH BLESS, un modulo
@NgModule({
  exports: [
    HeroComponent,
    ListComponent
  ],
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class HeroesModule {}
