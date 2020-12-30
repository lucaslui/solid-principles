export abstract class DebitAccount {
  private _transactionNumber: string;

  get transactionNumber(): string {
    return this._transactionNumber;
  }

  set transactionNumber(value: string) {
    this._transactionNumber = value;
  }

  abstract debit(value: number, account: string): string;
}
