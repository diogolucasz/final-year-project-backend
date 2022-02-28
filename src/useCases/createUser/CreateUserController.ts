import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, surname, email, username, password, course_id } = request.body;

        const createUserUseCase = new CreateUserUseCase();

        const result = await createUserUseCase.execute({
            name,
            surname,
            email,
            username,
            password,
            course_id,
        })

        if (result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}