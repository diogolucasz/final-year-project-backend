import { ICreateUserDTO } from "./ICreateUserDTO";
import { User } from "../entities/User";
import { IAssignRole } from "./IAssignRole";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    create(data: ICreateUserDTO): Promise<User>;
    save(user: User): Promise<User>;
    findById(id: string): Promise<User>;
    assignRole(data: IAssignRole): Promise<void>;
}