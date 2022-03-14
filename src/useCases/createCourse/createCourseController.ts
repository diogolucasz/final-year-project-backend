import { Request, Response } from "express";
import { CreateCourseUseCase } from "./createCourseUseCase";

export class CreateCourseController {

    constructor(
        private createCourseUseCase: CreateCourseUseCase
    ) { }

    async handle(request: Request, response: Response) {

        const { name, description } = request.body;

        const product = await this.createCourseUseCase.execute({
            name,
            description,
        });

        return response.json(product);
    }
}
