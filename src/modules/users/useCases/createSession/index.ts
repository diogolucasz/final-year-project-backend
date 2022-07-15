import { DayjsDateProvider } from "../../../../shared/providers/DataProvider/DayjsDateProvider";
import { PermissionRepository } from "../../repositories/PermissionRepository";
import { RoleRepository } from "../../repositories/RoleRepository";
import { UserRepository } from "../../repositories/UsersRepository";
import { UsersTokensRepository } from "../../repositories/UsersTokensRepository";
import { CreateSessionController } from "./createSessionController";
import { CreateSessionUseCase } from "./createSessionUseCase";

export default (): CreateSessionController => {

    const usersRepository = new UserRepository();
    const usersTokensRepository = new UsersTokensRepository()
    const dayjsDateProvider = new DayjsDateProvider()
    // const permissionRepository = new PermissionRepository();
    // const roleRepository = new RoleRepository();

    const createSessionUseCase = new CreateSessionUseCase(
        usersRepository,
        usersTokensRepository,
        dayjsDateProvider,
        //roleRepository,
        //permissionRepository,
    )

    const createSessionController = new CreateSessionController(
        createSessionUseCase
    )

    return createSessionController;
}