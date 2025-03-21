import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslationService } from './shared/services/translation/translation.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translationService: TranslationService) {}
  
  ngOnInit() {
    this.translationService.loadTranslations();
  }
}
