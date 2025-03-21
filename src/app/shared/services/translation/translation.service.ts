import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations = signal<Record<string, any>>({});
  
  constructor(private http: HttpClient) {}

  public loadTranslations() {
    this.http.get<Record<string, any>>('/assets/i18n/pt.json')
      .subscribe({
        next: (data) => {
          this.translations.set(data);
        },
        error: (err) => {
          console.error('Erro ao carregar traduções:', err);
        },
        complete: () => {
          console.log('Requisição concluída.');
        }
      });
  }
  
  public  translate(key: string): string {
    const result = key.split('.').reduce((obj, part) => obj?.[part], this.translations());
    return typeof result === 'string' ? result : key;
  }
  
}
