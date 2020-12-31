import { ICPFServices } from "./interfaces/icpf-services";
import { IEmailServices } from "./interfaces/iemail-services";

export class User {
  public name: string;
  public email: string;
  public cpf: string;
  public dateCreation: Date;

  constructor(
    private readonly emailServices: IEmailServices,
    private readonly cpfService: ICPFServices
  ) {}

  isValid(): boolean {
    return  this.emailServices.isValid(this.email) && this.cpfService.isValid(this.cpf);
  }
}
