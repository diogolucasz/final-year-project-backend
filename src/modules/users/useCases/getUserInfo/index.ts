import { UserRepository } from "../../repositories/UsersRepository";
import { GetUserInfoController } from "./GetUserInfoController";
import { GetUserInfoUseCase } from "./GetUserInfoUseCase";


export default (): GetUserInfoController => {

    const usersRepository = new UserRepository();

    const getUserInfoUseCase = new GetUserInfoUseCase(
        usersRepository
    )

    const getUserInfoController = new GetUserInfoController(
        getUserInfoUseCase
    )

    return getUserInfoController;
}