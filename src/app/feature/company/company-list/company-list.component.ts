import { Component } from '@angular/core';
import { CompanyService } from '../services/company/company.service';
import { CardComponent } from "../../../shared/components/card/card.component";
import { CommonModule } from '@angular/common';
import { CompanyApplication } from '../models/CompanyApplication';

@Component({
  selector: 'app-company-list',
  imports: [CardComponent, CommonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {

  protected companyApplication!: Array<CompanyApplication>;

  constructor(
    private companyService: CompanyService
  ) {
    this.requestGetCompanys();
  }

  public requestGetCompanys = () => {
   this.companyService.getCompanys().subscribe(res => {
    this.companyApplication = res;
   });
  }
}
