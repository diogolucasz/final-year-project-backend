import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, surname, email, username, password } = request.body;

        const createUserUseCase = new CreateUserUseCase();

        await createUserUseCase.execute({
            name,
            surname,
            email,
            username,
            password
        })

        return response.status(201).send()
    }
}