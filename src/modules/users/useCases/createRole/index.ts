import { RoleRepository } from "../../repositories/RoleRepository";
import { PermissionRepository } from "../../repositories/PermissionRepository";
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