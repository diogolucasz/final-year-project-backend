import { Post } from "../entities/Post";
import { ICreatePostDTO } from "./ICreatePostDTO";

export interface IPostsRepository {
    list(): Promise<Post[]>
    create(data: ICreatePostDTO): Promise<Post>;
    save(course: Post): Promise<Post>;
}


