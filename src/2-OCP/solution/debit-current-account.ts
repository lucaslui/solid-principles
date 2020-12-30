import { DebitAccount } from "./debit-account";

export class DebitCurrentAccount extends DebitAccount {
  debit(value: number, account: string): string {
    console.log("business logic to debit in current accounts");
    this.setTransactionNumber()
    return this.getTransactionNumber();
  }
}
