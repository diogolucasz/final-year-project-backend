import { UserRepository } from "../../repositories/UsersRepository";
import { GetUserProfileController } from "./GetUserProfileController";
import { GetUserProfileUseCase } from "./GetUserProfileUseCase";


export default (): GetUserProfileController => {

    const usersRepository = new UserRepository();

    const getUserProfileUseCase = new GetUserProfileUseCase(
        usersRepository
    )

    const getUserInfoController = new GetUserProfileController(
        getUserProfileUseCase
    )

    return getUserInfoController;
}