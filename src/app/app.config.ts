import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { base_routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(base_routes),
    importProvidersFrom(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
