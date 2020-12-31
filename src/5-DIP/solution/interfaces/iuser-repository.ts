import { User } from "../user";

export interface IUserRepository {
  save(user: User): Promise<bigint | null>
}