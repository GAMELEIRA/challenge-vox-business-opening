import { Injectable } from '@angular/core';
import { PRODUCTION_URL } from '../../../../../../enviroment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CompanyApplication } from '../../models/CompanyApplication';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private URL_BASE = `${PRODUCTION_URL}/companies`;

  constructor(private httpClient: HttpClient) { }

  public getCompanys = (): Observable<Array<CompanyApplication>> => {
    return this.httpClient.get<Array<CompanyApplication>>(`${this.URL_BASE}`);
  };

  public getCompany = (id: string | null): Observable<CompanyApplication> => {
    return this.httpClient.get<CompanyApplication>(`${this.URL_BASE}/${id}`);
  };

  public putCompany = (companyApplication: CompanyApplication): Observable<CompanyApplication> => {
    return this.httpClient.put<CompanyApplication>(`${this.URL_BASE}/${companyApplication.id}`, companyApplication);
  }
  public postCompany(companyApplication: CompanyApplication): Observable<any> {
    return new Observable((observer) => {
      this.getCompanys().subscribe({
        next: (value) => {
          const id = value.length + 1;
          companyApplication.id = String(id);
          this.httpClient.post<CompanyApplication>(`${this.URL_BASE}`, companyApplication)
            .subscribe({
              next: (response) => {
                observer.next(response);
                observer.complete();
              },
              error: (err) => {
                observer.error(err);
              }
            });
        },
        error: (err) => {
          observer.error(err);
        }
      });
    });
  }

}
