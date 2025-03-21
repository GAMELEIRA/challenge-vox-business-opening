import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { CompanyApplication } from '../../models/CompanyApplication';
import { CompanyService } from '../../services/company/company.service';
import { RouterService } from '../../../../shared/services/router/router.service';

@Component({
  selector: 'app-company-list',
  imports: [CardComponent, CommonModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {

  protected companyApplication!: Array<CompanyApplication>;

  constructor(
    private companyService: CompanyService,
    public routerService: RouterService
  ) {
    this.requestGetCompanys();
  }

  public requestGetCompanys = () => {
   this.companyService.getCompanys().subscribe(res => {
    this.companyApplication = res;
   });
  }

  public navigateToShowDetailsOfCompany = (id: string) => {
    this.routerService.navigateToPage(`/companies/detail/${id}`);
  } 

  public navigateToShowEditionOfCompany = (company: CompanyApplication) => {
    this.routerService.navigateToPage(`/companies/edit/${company.id}`, { state: { companyData: company } });
  }
  
}
