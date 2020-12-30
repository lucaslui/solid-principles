import { IRegister } from "./iregister";

export class ProductRegister implements IRegister {
  dataValid(): boolean {
    console.log("Validate product data");
    return true;
  }

  async save(): Promise<void> {
    return Promise.resolve(console.log("Insert the product in database"));
  }

  async sendEmail(): Promise<void> {
    return Promise.resolve(console.log(">>> do not anything! <<<"));
  }
}
