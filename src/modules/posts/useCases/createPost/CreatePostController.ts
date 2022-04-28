
import { Request, Response } from "express";


export class CreatePostController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { subject, message } = request.body;
        const { id } = request.user;

        const post = await createRentalUseCase.execute({
            subject,
            message,
            user_id: id,
        });

    }
}
