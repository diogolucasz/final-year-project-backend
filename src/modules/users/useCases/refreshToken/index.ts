import { DayjsDateProvider } from "../../../../shared/providers/DataProvider/DayjsDateProvider";
import { UserRepository } from "../../repositories/UsersRepository";
import { UsersTokensRepository } from "../../repositories/UsersTokensRepository";

import { RefreshTokenController } from "./RefreshTokenController";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";


export default (): RefreshTokenController => {

    const usersRepository = new UserRepository();
    const dayjsDateProvider = new DayjsDateProvider()
    const usersTokensRepository = new UsersTokensRepository()

    const refreshTokenUseCase = new RefreshTokenUseCase(
        usersTokensRepository,
        usersRepository,
        dayjsDateProvider
    )

    const refreshTokenController = new RefreshTokenController(
        refreshTokenUseCase
    )

    return refreshTokenController;
}