import { ICreateUserDTO } from "./ICreateUserDTO";
import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User | undefined>;
    create(data: ICreateUserDTO): Promise<User>;
    save(user: User): Promise<User>;
}