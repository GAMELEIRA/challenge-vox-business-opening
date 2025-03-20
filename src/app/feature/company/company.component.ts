import { Component } from '@angular/core';
import { CompanyListComponent } from "./company-list/company-list.component";

@Component({
  selector: 'app-company',
  imports: [CompanyListComponent],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

}
