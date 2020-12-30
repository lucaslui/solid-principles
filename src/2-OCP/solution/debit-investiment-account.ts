import { DebitAccount } from "./debit-account";

export class DebitInvestimentAccount extends DebitAccount {
  
  debit(value: number, account: string): string {
    console.log("business logic to debit in investiment accounts");
    this.setTransactionNumber()
    return this.getTransactionNumber();
  }
}