import { Component } from '@angular/core';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { ButtonComponent } from "../../shared/components/button/button.component";

@Component({
  selector: 'app-company',
  imports: [CompanyListComponent, CommonModule, RouterModule, HeaderComponent, ButtonComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

  constructor(private router: Router) {

  }

  public navigateToCreateCompany = () => {
    this.router.navigateByUrl(`companies/create`)
  }

}
