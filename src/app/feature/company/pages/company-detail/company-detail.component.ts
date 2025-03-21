import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CompanyService } from '../../services/company/company.service';
import { CompanyApplication } from '../../models/CompanyApplication';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-detail',
  imports: [CommonModule, HeaderComponent, CardComponent],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.scss'
})
export class CompanyDetailComponent {

  public companyApplication!: CompanyApplication;
  public companyId!: string | null;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute
  ) {
    this.requestGetCompany();
  }

  public requestGetCompany = () => {
    this.route.paramMap.subscribe(params => {
      this.companyId = params.get('id');
      if (this.companyId) {
        this.companyService.getCompany(this.companyId).subscribe(res => {
          this.companyApplication = res;
        })
      }
    });
  }

}
