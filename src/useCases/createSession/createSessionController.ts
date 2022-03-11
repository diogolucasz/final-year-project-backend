import { Request, Response } from "express";
import { UserRepository } from "../../modules/users/repositories/UsersRepository";
import { DayjsDateProvider } from "../../shared/providers/DataProvider/DayjsDateProvider";
import { UsersTokensRepository } from "../createUsersTokens/UsersTokensRepository";
import { CreateSessionUseCase } from "./createSessionUseCase";

export class CreateSessionController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { email, password } = request.body;

        const createSessionUseCase = new CreateSessionUseCase(new UserRepository(),new UsersTokensRepository(), new DayjsDateProvider());

        const token = await createSessionUseCase.execute({ email, password });

        return response.json(token)
    }
}