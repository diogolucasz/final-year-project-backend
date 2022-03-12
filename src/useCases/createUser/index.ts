import { UserRepository } from "../../modules/users/repositories/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const usersRepository = new UserRepository();

export const createUserUseCase = new CreateUserUseCase(
    usersRepository
)

export const createUserController = new CreateUserController(
    createUserUseCase
)