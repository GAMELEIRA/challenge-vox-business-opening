import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CompanyService } from '../../services/company/company.service';
import { CompanyApplication } from '../../models/CompanyApplication';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
  selector: 'app-company-detail',
  imports: [CommonModule, HeaderComponent, CardComponent],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.scss'
})
export class CompanyDetailComponent {

  public companyApplication!: CompanyApplication;

  constructor(
    private companyService: CompanyService
  ) {
    this.requestCompanyService();
  }

  public requestCompanyService = () =>  {
    this.companyService.getCompany('1').subscribe(res => {
      this.companyApplication = res;
      console.log(res);
    })
  }

}
