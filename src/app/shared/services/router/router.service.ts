import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) {}

  public navigateToPage(url: string) {
    this.router.navigateByUrl(url);
  }
}
