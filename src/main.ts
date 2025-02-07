// main.ts
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';

// Import global styles (if any)
import './styles.css';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // ...other global providers...
  ],
}).catch((err) => console.error(err));