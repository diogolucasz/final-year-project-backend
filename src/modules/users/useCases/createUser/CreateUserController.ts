import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {

    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, surname, email, username, password, course_id } = request.body;

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