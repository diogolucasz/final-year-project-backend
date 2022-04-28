import { Post } from "../../entities/Post";
import { PostsRepository } from "../../repositories/PostRepository";


export class ListPostsUseCase {

    constructor(
        private postsRepository: PostsRepository
    ) { }

    async execute(): Promise<Post[]> {
        const categories = await this.postsRepository.list();

        return categories;
    }
}