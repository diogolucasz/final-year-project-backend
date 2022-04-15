
import { RoleRepository } from "../../modules/users/repositories/RoleRepository";
import { CreateRoleController } from "./createRoleController";
import { CreateRoleUserCase } from "./createRoleUseCase";

export default (): CreateRoleController => {
    const roleRepository = new RoleRepository();

    const createRoleUseCase = new CreateRoleUserCase(
        roleRepository
    )

    const createRoleController = new CreateRoleController(
        createRoleUseCase
    )

    return createRoleController;
}