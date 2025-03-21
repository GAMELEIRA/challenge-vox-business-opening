import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) {}

  public navigateToPage(url: string, object?: any): void {
    this.router.navigateByUrl(url, { state: object ? { data: object } : undefined });
  }
  
}
