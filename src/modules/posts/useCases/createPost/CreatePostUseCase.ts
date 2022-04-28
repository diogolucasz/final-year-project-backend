import { Post } from "../../entities/Post";


interface IRequest {
    user_id: string;
    subject: string;
    message: string;
}

export class CreatePostUseCase {

    async execute({ message, user_id, subject }: IRequest): Promise<Post> {

        //const { id } = request.user;

        const post = await
    }
}