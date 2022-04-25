import { RoleRepository } from "../../modules/users/repositories/RoleRepository";
import { UserRepository } from "../../modules/users/repositories/UsersRepository";
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