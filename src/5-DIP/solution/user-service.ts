import { User } from "./user";
import { IUserService } from "./interfaces/iuser-service";
import { IUserRepository } from "./interfaces/iuser-repository";
import { IEmailServices } from "./interfaces/iemail-services";

export class UserService implements IUserService {

  constructor(
    private readonly userRepository: IUserRepository,
    private readonly emailServices: IEmailServices
  ) {}

  async save(user: User): Promise<bigint | null> {
    if (!user.isValid()) return null;

    const result = await this.userRepository.save(user);

    if (result != null) {
      await this.emailServices.sendEmail(
        "any_origin@mail.com",
        user.email,
        `Bem vindo ${user.name}`,
        "Parabéns, você já esta cadastrado!"
      );
    }

    return result;
  }
}
