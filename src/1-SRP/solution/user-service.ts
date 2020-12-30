import { User } from "./user";
import { UserRepository } from "./user-repository";
import { EmailServices } from "./email-services";

export class UserService {
  constructor() {}
  async save(user: User): Promise<bigint | null> {
    if (!user.isValid()) return null;

    const userRepository = new UserRepository();
    const result = await userRepository.save(user);

    if (result != null) {
      await EmailServices.sendEmail(
        "any_origin@mail.com",
        user.email,
        `Bem vindo ${user.name}`,
        "Parabéns, você já esta cadastrado!"
      );
    }

    return result;
  }
}
