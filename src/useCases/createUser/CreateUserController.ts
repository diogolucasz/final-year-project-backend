import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";
import { UserRepository } from "../../modules/users/repositories/UsersRepository";

export class CreateUserController {

    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, surname, email, username, password, course_id } = request.body;

        //const createUserUseCase = new CreateUserUseCase(new UserRepository() as void);

        const user = await this.createUserUseCase.execute({
            name,
            surname,
            email,
            username,
            password,
            course_id,
        })

        return response.json(user);
    }
}