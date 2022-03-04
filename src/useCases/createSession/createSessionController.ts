import { Request, Response } from "express";
import { CreateSessionUseCase } from "./createSessionUseCase";

export class CreateSessionController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { email, password } = request.body;

        const createSessionUseCase = new CreateSessionUseCase();

        const token = await createSessionUseCase.execute({ email, password });

        return response.json(token)
    }
}