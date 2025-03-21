import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TranslationService } from './shared/services/translation/translation.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    {
      provide: 'APP_INITIALIZER',
      useFactory: (translationService: TranslationService) => () => translationService.loadTranslations(),
      deps: [TranslationService],
      multi: true
    }]
};
