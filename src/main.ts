import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// import { HeaderComponent } from './app/Header.Component';

// bootstrapApplication(AppComponent).catch((err) => console.error(err));
// bootstrapApplication(HeaderComponent).catch((err) => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule)