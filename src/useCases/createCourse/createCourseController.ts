import { Request, Response } from "express";
import { CreateCourseUseCase } from "./createCourseUseCase";

export class CreateCourseController {

    async handle(request: Request, response: Response) {

        const { name, description } = request.body;

        const createProductService = new CreateCourseUseCase();

        const product = await createProductService.execute({
            name,
            description,
        });

        return response.json(product);
    }
}
