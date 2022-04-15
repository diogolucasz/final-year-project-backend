
import { Permission } from "../entities/Permission";
import { ICreatePermissionDTO } from "./ICreatePermissionDTO";

export interface IPermissionsRepository {
    findByName(email: string): Promise<Permission>;
    create(data: ICreatePermissionDTO): Promise<Permission>;
    save(data: Permission): Promise<Permission>;
    findByIds(ids: string[]): Promise<Permission[]>;
}