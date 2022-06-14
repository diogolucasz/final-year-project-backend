import { Role } from "../entities/Role";
import { ICreateRoleDTO } from "./ICreateRoleDTO";

export interface IRolesRepository {
    findByName(email: string): Promise<Role>;
    create(data: ICreateRoleDTO): Promise<Role | Error>;
    findByIds(ids: string[]): Promise<Role[]>;
}