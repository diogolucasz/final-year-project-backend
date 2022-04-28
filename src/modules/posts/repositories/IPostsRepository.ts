import { Post } from "../entities/Post";

export interface IPostsRepository {
    list(): Promise<Post[]>
}


