import { Post } from "../../entities/Post";
import { IPostsRepository } from "../../dto/IPostsRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../../users/dto/IUsersRepository";


interface IRequest {
    user_id: string;
    subject: string;
    message: string;
}

export class CreatePostUseCase {

    constructor(
        private postsRepository: IPostsRepository,
        private usersRepository: IUsersRepository,
    ) { }

    async execute({ message, user_id, subject }: IRequest): Promise<Post> {

        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError(400, `User does not exists`)
        }

        const post = this.postsRepository.create({
            user_id,
            message,
            subject
        });

        await this.postsRepository.save(await post);

        return post;
    }
}