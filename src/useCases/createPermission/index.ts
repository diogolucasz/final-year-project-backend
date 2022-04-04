
import { PermissionRepository } from "../../modules/users/repositories/PermissionRepository";
import { CreatePermissionController } from "./createPermissionController";
import { CreatePermissionUserCase } from "./createPermissionUseCase";

export default (): CreatePermissionController => {
    const permissionRepository = new PermissionRepository();

    const createPermissionUseCase = new CreatePermissionUserCase(
        permissionRepository
    )

    const createPermissionController = new CreatePermissionController(
        createPermissionUseCase
    )

    return createPermissionController;
}