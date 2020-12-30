import { CPFServices } from "./cpf-services";
import { EmailServices } from "./email-services";

export class User {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly cpf: string,
    public readonly dateCreation: Date
  ) {}

  isValid(): boolean {
    return EmailServices.isValid(this.email) && CPFServices.isValid(this.cpf);
  }
}
