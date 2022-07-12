import { Post } from "../../entities/Post";
import { PostsRepository } from "../../repositories/PostRepository";


export class ListPostsUseCase {

    constructor(
        private postsRepository: PostsRepository
    ) { }

    async execute(): Promise<Post[]> {

        const posts = await this.postsRepository.list();

        

        return posts;
    }
}