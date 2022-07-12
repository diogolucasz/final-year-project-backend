import { Request, Response } from "express";
import { ListCoursesUseCase } from "./listCoursesUseCase";

export class ListCoursesController {

    constructor(
        private listCoursesUseCase: ListCoursesUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const fetchCourses = await this.listCoursesUseCase.execute();

        return response.json(fetchCourses);
    }
}
