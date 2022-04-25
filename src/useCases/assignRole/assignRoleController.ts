import { Request, Response } from "express";
import { AssignRoleUserCase } from "./assignRoleUseCase";

export class AssignRoleController {

    constructor(
        private assignRoleUserCase: AssignRoleUserCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { id, roles } = request.body;

        const permisson = await this.assignRoleUserCase.execute({ id, roles });

        return response.json(permisson);
    }
}