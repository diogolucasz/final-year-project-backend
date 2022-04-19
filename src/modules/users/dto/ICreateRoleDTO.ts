import { Permission } from "../entities/Permission";

export interface ICreateRoleDTO {
    name: string;
    description: string;
    permission: Permission[];
}