import { Request, Response } from "express";
import { CreatePermissionUserCase } from "./createPermissionUseCase";

export class CreatePermissionController {

    constructor(
        private createPermissionUserCase: CreatePermissionUserCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, description } = request.body;

        const permisson = await this.createPermissionUserCase.execute({ name, description });

        return response.json(permisson);
    }
}