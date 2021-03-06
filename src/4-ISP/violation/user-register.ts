import { IRegister } from "./iregister";

export class UserRegister implements IRegister {
  dataValid(): boolean {
    console.log("Validate the user: cpf, email and etc");
    return true;
  }

  async save(): Promise<void> {
    return Promise.resolve(console.log("Insert the user in database"));
  }

  async sendEmail(): Promise<void> {
    return Promise.resolve(console.log("Send an email to the user"));
  }
}
