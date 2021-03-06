import { Request, Response } from "express";
import { IUsersRepository } from "../../../users/dto/IUsersRepository";
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController {

    constructor(
        private createPostUseCase: CreatePostUseCase,
    ) { }

    async handle(request: Request | any, response: Response): Promise <Response>{

        const { id } = request.user;
        const { subject, message } = request.body;
        
        const post = await this.createPostUseCase.execute({
            user_id: id,
            message,
            subject,
        });

        return response.json(post);
    }
}
