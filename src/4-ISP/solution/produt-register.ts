import { IProductRegister } from "./iproduct-register";

export class ProductRegister implements IProductRegister {
  dataValid(): boolean {
    console.log("Validate product data");
    return true;
  }

  async save(): Promise<void> {
    return Promise.resolve(console.log("Insert the product in database"));
  }
}
