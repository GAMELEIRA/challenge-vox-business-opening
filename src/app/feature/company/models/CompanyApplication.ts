import { Applicant } from "./Applicant";
import { Company } from "./Company";

export class CompanyApplication {
  public id: string = " ";
  public applicant: Applicant = new Applicant();
  public company: Company = new Company();
}