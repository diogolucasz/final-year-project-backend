import { ICreateUserDTO } from "./ICreateUserDTO";
import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User | undefined>;
    //findOne(email: string): Promise<User>;
    create(data: ICreateUserDTO): Promise<User>;
    save(user: User): Promise<void>;
}