import { DebitAccount } from "./debit-account";

import { v4 as uuidv4 } from "uuid";

export class DebitSavingAccount extends DebitAccount {
  debit(value: number, account: string): string {
    console.log("business logic to debit in saving accounts");
    this.transactionNumber = uuidv4();
    return this.transactionNumber;
  }
}
