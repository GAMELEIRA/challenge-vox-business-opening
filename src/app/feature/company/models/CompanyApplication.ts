import { Applicant } from "./Applicant";
import { Company } from "./Company";

export class CompanyApplication {
  public id!: number;
  public applicant!: Applicant;
  public company!: Company;
}