import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { FormComponent } from "../../../../shared/components/form/form.component";
import { CompanyApplication } from '../../models/CompanyApplication';
import { CompanyService } from '../../services/company/company.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-company-create',
  imports: [HeaderComponent, FormComponent, CommonModule],
  templateUrl: './company-create.component.html',
  styleUrl: './company-create.component.scss'
})
export class CompanyCreateComponent {

  public companyApplication: CompanyApplication = new CompanyApplication();

  constructor(
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
 
  }

  public onCancel(): void {
    this.location.back();
  }

  public onFormSave(updatedData: Record<string, any>): void {
    const formData = { ...this.companyApplication, ...updatedData };
    this.companyService.postCompany(formData).subscribe({
      next: () => {
        this.location.back();
      },
      error: (error) => {
        console.error("Erro ao cadastrar empresa:", error);
      }
    });
  }
}