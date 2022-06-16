import { ICreateUserDTO } from "./ICreateUserDTO";
import { User } from "../entities/User";
import { IAssignRole } from "./IAssignRole";
import { Role } from "../entities/Role";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    create(data: ICreateUserDTO): Promise<User>;
    save(user: User): Promise<User>;
    findById(id: string): Promise<User>;
    assignRole(data: IAssignRole): Promise<void>;
    findRoleByUserID(id: string): Promise<any>
}