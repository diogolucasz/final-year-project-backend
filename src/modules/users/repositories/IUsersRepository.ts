import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { User } from "../entities/User";

export interface IUsersRepository {
    findOne(email: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    create(user:ICreateUserDTO): Promise<void>;
    save(user: User): Promise<void>;
}