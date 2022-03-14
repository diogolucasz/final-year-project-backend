import { UserRepository } from "../../modules/users/repositories/UsersRepository";
import { DayjsDateProvider } from "../../shared/providers/DataProvider/DayjsDateProvider";
import { UsersTokensRepository } from "../../modules/users/repositories/UsersTokensRepository";
import { CreateSessionController } from "./createSessionController";
import { CreateSessionUseCase } from "./createSessionUseCase";

export default (): CreateSessionController => {

    const usersRepository = new UserRepository();
    const usersTokensRepository = new UsersTokensRepository()
    const dayjsDateProvider = new DayjsDateProvider()

    const createSessionUseCase = new CreateSessionUseCase(
        usersRepository,
        usersTokensRepository,
        dayjsDateProvider
    )

    const createSessionController = new CreateSessionController(
        createSessionUseCase
    )

    return createSessionController;
}