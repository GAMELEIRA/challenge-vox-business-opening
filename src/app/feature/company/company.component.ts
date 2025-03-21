import { Component } from '@angular/core';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-company',
  imports: [CompanyListComponent, CommonModule, RouterModule, HeaderComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

}
