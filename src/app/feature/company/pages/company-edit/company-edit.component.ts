import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company/company.service';
import { ActivatedRoute } from '@angular/router';
import { CompanyApplication } from '../../models/CompanyApplication';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { FormComponent } from "../../../../shared/components/form/form.component";
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-company-edit',
  imports: [HeaderComponent, FormComponent, CommonModule],
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.scss'
})
export class CompanyEditComponent implements OnInit {

  public companyApplication!: CompanyApplication;
  public companyId!: string | null;

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    const navigation = window.history.state;
    if (navigation && navigation.companyData) {
      this.companyApplication = navigation.companyData;
    } else {
      this.requestGetCompany();
    }
  }

  public requestGetCompany = () => {
    this.route.paramMap.subscribe(params => {
      this.companyId = params.get('id');
      if (this.companyId) {
        this.companyService.getCompany(this.companyId).subscribe(res => {
          this.companyApplication = res;
        });
      }
    });
  };

  public onCancel = () => {
    this.location.back();
  }

  public onFormSave = (updatedData: Record<string, any>) => {
    const updatedCompany = { ...this.companyApplication, ...updatedData };
    this.companyService.putCompany(updatedCompany).subscribe(res => {
      console.log(res);
      this.location.back();
    });
  }
  

}
