import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//JAH BLESS, gracias al platformBrowserDynamic() es que se puede correr la aplicacion en el navegador
//JAH BLESS, por el AppModule se puede correr la aplicacion en el navegador
//JAH BLESS, gracias a otras librerias podría correr angular en otros entornos supongo cambiando la función de platformBrowserDynamic()
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
