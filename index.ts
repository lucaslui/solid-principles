/*=========================== SRP violation ===========================*/

// import { User } from "./src/SRP/violation/user";

// const user = new User(
//   "Lucas",
//   "lucasluimotta@gmail.com",
//   "231.313.122-33",
//   new Date()
// );

// user
//   .save()
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

/*=========================== SRP solution ===========================*/

// import { User } from "./src/1-SRP/solution/user";
// import { UserService } from "./src/1-SRP/solution/user-service";

// const user = new User(
//   "Lucas",
//   "lucasluimotta@gmail.com",
//   "231.313.122-33",
//   new Date()
// );

// const userService = new UserService();

// userService
//   .save(user)
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));

/*=========================== OCP violation ===========================*/

// import { AccountType } from "./src/2-OCP/violation/account-type";
// import { DebitAccount } from "./src/2-OCP/violation/debit-account";

// const debitAccount = new DebitAccount();

// let transactionNumber = debitAccount.debit(234, "25633-5", AccountType.current);

// console.log(transactionNumber);

// transactionNumber = debitAccount.debit(534, "58771-5", AccountType.saving);

// console.log(transactionNumber);

/*=========================== OCP solution ===========================*/

import { DebitCurrentAccount } from './src/2-OCP/solution/debit-current-account';
import { DebitInvestimentAccount } from './src/2-OCP/solution/debit-investiment-account';
import { DebitSavingAccount } from './src/2-OCP/solution/debit-saving-account';

const debitCurrentAccount = new DebitCurrentAccount()
let transactionNumber = debitCurrentAccount.debit(234, '25633-5');
console.log(transactionNumber);

const debitSavingAccount = new DebitSavingAccount()
transactionNumber = debitSavingAccount.debit(534, '58771-5')
console.log(transactionNumber);

const debitInvestimentAccount = new DebitInvestimentAccount()
transactionNumber = debitInvestimentAccount.debit(534, '58771-5')
console.log(transactionNumber);

