import { Request, Response } from "express";
import { CreateSessionUseCase } from "./createSessionUseCase";

export class CreateSessionController {

    constructor(
        private createSessionUseCase: CreateSessionUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { email, password } = request.body;

        const token = await this.createSessionUseCase.execute({ email, password });

        return response.json(token)
    }
}