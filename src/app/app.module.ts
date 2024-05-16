import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { CounterModule } from './counter/components/counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//JAH BLESS, si tiene la palabra Module va en los inports
//JAH BLESS
/**
 *JAH BLESS
¡JAH BLESS! El error que estás viendo se debe a que el
ListComponent está declarado en dos módulos: AppModule y HeroesModule.
En Angular, un componente debe ser declarado en un solo módulo para evitar conflictos.

Para solucionar este problema, debes decidir en qué módulo
declarar el ListComponent. Dado que parece que el ListComponent
pertenece al contexto de los héroes, lo correcto sería declararlo solo en el HeroesModule.
JAH BLESS, lo tenía acá en declarations. Solo importo mi modulo y automatico agarra los componentes
JAH BLESS, pues se exportan en el modulo
 */
