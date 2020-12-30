import { AccountType } from "./account-type";

import { v4 as uuidv4 } from "uuid";

export class DebitAccount {
  private _transactionNumber: string;

  get transactionNumber(): string {
    return this._transactionNumber;
  }

  set transactionNumber(value: string) {
    this._transactionNumber = value;
  }

  debit(value: number, account: string, accountType: AccountType): string {
    if (accountType == AccountType.current) {
      console.log("business logic to debit in current accounts");
    }

    if (accountType == AccountType.saving) {
      console.log("business logic to debit in saving accounts");
    }

    this.transactionNumber= uuidv4();

    return this.transactionNumber;
  }
}
