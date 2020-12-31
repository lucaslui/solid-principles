/*=========================== SRP violation ===========================*/

// import { User } from "./src/1-SRP/violation/user";

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

// import { DebitCurrentAccount } from './src/2-OCP/solution/debit-current-account';
// import { DebitInvestimentAccount } from './src/2-OCP/solution/debit-investiment-account';
// import { DebitSavingAccount } from './src/2-OCP/solution/debit-saving-account';

// const debitCurrentAccount = new DebitCurrentAccount()
// let transactionNumber = debitCurrentAccount.debit(234, '25633-5');
// console.log(transactionNumber);

// const debitSavingAccount = new DebitSavingAccount()
// transactionNumber = debitSavingAccount.debit(534, '58771-5')
// console.log(transactionNumber);

// const debitInvestimentAccount = new DebitInvestimentAccount()
// transactionNumber = debitInvestimentAccount.debit(534, '58771-5')
// console.log(transactionNumber);

/*=========================== LSP violation ===========================*/

// import { Rectangle } from "./src/3-LSP/violation/rectangle";
// import { Square } from "./src/3-LSP/violation/square";

// const getArea = (rectangle: Rectangle) => {
//   console.log("Calculation of the rectangle area:")
//   console.log(`(Height) ${rectangle.height} * ${rectangle.width} (Width)`)
//   console.log(`Area: ${rectangle.area}`)
// }

// const square = new Square()

// square.height = 10;
// square.width = 5;

// getArea(square)

/*=========================== LSP solution ===========================*/

// import { Rectangle } from "./src/3-LSP/solution/rectangle";
// import { Square } from "./src/3-LSP/solution/square";

// const getAreaRectangle = (rectangle: Rectangle) => {
//   console.log("Calculation of the rectangle area:")
//   console.log(`(Height) ${rectangle.height} * ${rectangle.width} (Width)`)
//   console.log(`Area: ${rectangle.area}`)
// }

// const getAreaSquare = (square: Square) => {
//   console.log("Calculation of the square area:")
//   console.log(`(Side) ${square.side} * ${square.side} (Side)`)
//   console.log(`Area: ${square.area}`)
// }

// const rectangle = new Rectangle()
// rectangle.height = 10;
// rectangle.width = 5;
// getAreaRectangle(rectangle)

// const square = new Square()
// square.side = 10;
// getAreaSquare(square)

/*=========================== ISP violation ===========================*/

// import { ProductRegister } from "./src/4-ISP/violation/produt-register";
// import { UserRegister } from "./src/4-ISP/violation/user-register";

// const userRegister = new UserRegister()

// if(userRegister.dataValid()) {
//   userRegister.save()
//   userRegister.sendEmail()
// }

// const productRegister = new ProductRegister()

// if(productRegister.dataValid()){
//   productRegister.save()
//   productRegister.sendEmail()
// }

/*=========================== ISP solution ===========================*/

// import { ProductRegister } from "./src/4-ISP/solution/produt-register";
// import { UserRegister } from "./src/4-ISP/solution/user-register";

// const userRegister = new UserRegister()

// if(userRegister.dataValid()) {
//   userRegister.save()
//   userRegister.sendEmail()
// }

// const productRegister = new ProductRegister()

// if(productRegister.dataValid()){
//   productRegister.save()
// }

/*=========================== DIP violation ===========================*/

// import { User } from "./src/5-DIP/violation/user";
// import { UserService } from "./src/5-DIP/violation/user-service";

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

/*=========================== DIP solution ===========================*/

import { CPFServices } from "./src/5-DIP/solution/cpf-services";
import { EmailServices } from "./src/5-DIP/solution/email-services";
import { PostgresAdapter } from "./src/5-DIP/solution/postgres-adapter";
import { User } from "./src/5-DIP/solution/user";
import { UserService } from "./src/5-DIP/solution/user-service";

const emailServices = new EmailServices();
const cpfServices = new CPFServices();

const user = new User(emailServices, cpfServices);

user.name = "Lucas";
user.email = "lucasluimotta@gmail.com";
user.cpf = "231.313.122-33";
user.dateCreation = new Date();

const postgresAdapter = new PostgresAdapter();
const userService = new UserService(postgresAdapter, emailServices);

userService
  .save(user)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
