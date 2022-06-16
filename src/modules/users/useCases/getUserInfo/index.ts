import { UserRepository } from "../../repositories/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";


export default (): GetUserInfoController => {
    
    const usersRepository = new UserRepository();

    const getUserInfoUseCase = new GetUserInfoUseCase(
        usersRepository
    )

    const createUserController = new CreateUserController(
        createUserUseCase
    )

    return getUserInfoController;
}