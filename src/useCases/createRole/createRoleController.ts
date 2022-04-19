import { Request, Response } from "express";
import { CreateRoleUserCase } from "./createRoleUseCase";


export class CreateRoleController {

    constructor(
        private createRoleUserCase: CreateRoleUserCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, description, permissions } = request.body;

        const role = await this.createRoleUserCase.execute({ name, description, permissions });

        return response.json(role);

    }
}