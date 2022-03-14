import { UserRepository } from "../../modules/users/repositories/UsersRepository";
import { UsersTokensRepository } from "../../modules/users/repositories/UsersTokensRepository";
import { DayjsDateProvider } from "../../shared/providers/DataProvider/DayjsDateProvider";
import { RefreshTokenController } from "./RefreshTokenController";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";


export default (): RefreshTokenController => {
    
    //const usersRepository = new UserRepository();
    const usersTokensRepository = new UsersTokensRepository()
    const dayjsDateProvider = new DayjsDateProvider()

    const refreshTokenUseCase = new RefreshTokenUseCase(
        usersTokensRepository,
        dayjsDateProvider
    )

    const refreshTokenController = new RefreshTokenController(
        refreshTokenUseCase
    )

    return refreshTokenController;
}