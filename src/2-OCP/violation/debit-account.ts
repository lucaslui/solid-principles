import { AccountType } from "./account-type";

import { v4 as uuidv4 } from "uuid";

export class DebitAccount {
  private transactionNumber: string;

  getTransactionNumber(): string {
    return this.transactionNumber;
  }

  setTransactionNumber(): void {
    this.transactionNumber = uuidv4();
  }

  debit(value: number, account: string, accountType: AccountType): string {
    if (accountType == AccountType.current) {
      console.log("business logic to debit in current accounts");
    }

    if (accountType == AccountType.saving) {
      console.log("business logic to debit in saving accounts");
    }

    this.setTransactionNumber();

    return this.transactionNumber;
  }
}
