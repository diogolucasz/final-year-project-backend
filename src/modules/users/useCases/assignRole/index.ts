
import { RoleRepository } from "../../repositories/RoleRepository";
import { UserRepository } from "../../repositories/UsersRepository";

import { AssignRoleController } from "./assignRoleController";
import { AssignRoleUserCase } from "./assignRoleUseCase";


export default (): AssignRoleController => {
    const roleRepository = new RoleRepository();
    const userRepository = new UserRepository();

    const assignRoleUserCase = new AssignRoleUserCase(
        userRepository,
        roleRepository
    )

    const assignRoleController = new AssignRoleController(
        assignRoleUserCase
    )

    return assignRoleController;
}