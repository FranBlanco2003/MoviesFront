import { bootstrapApplication } from '@angular/platform-browser';
import {AppComponent} from './app/app';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Import provideHttpClient
import { routes} from './app/app.routes';

bootstrapApplication(AppComponent, { // Replace AppComponent with your actual root component if different
  providers: [
    provideHttpClient(withInterceptorsFromDi()) // Add provideHttpClient() here
    , provideRouter(routes) // Provide the routes for the application
  ]
}).catch(err => console.error(err));
