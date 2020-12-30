import { v4 as uuidv4 } from "uuid";

export abstract class DebitAccount {
  private transactionNumber: string;

  getTransactionNumber(): string {
    return this.transactionNumber;
  }

  setTransactionNumber(): void {
    this.transactionNumber = uuidv4();
  }

  abstract debit(value: number, account: string): string;
}
