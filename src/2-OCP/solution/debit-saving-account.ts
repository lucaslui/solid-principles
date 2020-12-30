import { DebitAccount } from "./debit-account";

export class DebitSavingAccount extends DebitAccount {
  
  debit(value: number, account: string): string {
    console.log("business logic to debit in saving accounts");
    this.setTransactionNumber()
    return this.getTransactionNumber();
  }
}