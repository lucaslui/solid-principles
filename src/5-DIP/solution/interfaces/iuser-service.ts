import { User } from "../user";

export interface IUserService {
  save(user: User): Promise<bigint | null>;
}
