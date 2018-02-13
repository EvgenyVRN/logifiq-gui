import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {SettingsService} from "./app/service/settings.service";

if (environment.production) {
  enableProdMode();
  SettingsService.remote = false;
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
