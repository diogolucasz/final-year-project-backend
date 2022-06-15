import { UserRepository } from "../../modules/users/repositories/UsersRepository";
import { DayjsDateProvider } from "../../shared/providers/DataProvider/DayjsDateProvider";
import { UsersTokensRepository } from "../../modules/users/repositories/UsersTokensRepository";
import { CreateSessionController } from "./createSessionController";
import { CreateSessionUseCase } from "./createSessionUseCase";
import { PermissionRepository } from "../../modules/users/repositories/PermissionRepository";
import { RoleRepository } from "../../modules/users/repositories/RoleRepository";

export default (): CreateSessionController => {

    const usersRepository = new UserRepository();
    const usersTokensRepository = new UsersTokensRepository()
    const dayjsDateProvider = new DayjsDateProvider()
    const permissionRepository = new PermissionRepository();
    const roleRepository = new RoleRepository();

    const createSessionUseCase = new CreateSessionUseCase(
        usersRepository,
        usersTokensRepository,
        dayjsDateProvider,
        roleRepository,
        permissionRepository,
    )

    const createSessionController = new CreateSessionController(
        createSessionUseCase
    )

    return createSessionController;
}