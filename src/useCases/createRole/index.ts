
import { Repository } from "typeorm";
import { PermissionRepository } from "../../modules/users/repositories/PermissionRepository";
import { RoleRepository } from "../../modules/users/repositories/RoleRepository";
import { CreateRoleController } from "./createRoleController";
import { CreateRoleUserCase } from "./createRoleUseCase";

export default (): CreateRoleController => {
    const roleRepository = new RoleRepository();
    const permissionsRepository = new PermissionRepository();

    const createRoleUseCase = new CreateRoleUserCase(
        roleRepository,
        permissionsRepository,
    )

    const createRoleController = new CreateRoleController(
        createRoleUseCase
    )

    return createRoleController;
}