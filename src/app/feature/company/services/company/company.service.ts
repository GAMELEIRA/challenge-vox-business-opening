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
}
