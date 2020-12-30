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

import { User } from "./src/1-SRP/solution/user";
import { UserService } from "./src/1-SRP/solution/user-service";

const user = new User(
  "Lucas",
  "lucasluimotta@gmail.com",
  "231.313.122-33",
  new Date()
);

const userService = new UserService();

userService
  .save(user)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
