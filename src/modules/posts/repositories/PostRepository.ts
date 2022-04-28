import { Entity, EntityRepository, getRepository, Repository } from "typeorm";
import { Post } from "../entities/Post";
import { IPostsRepository } from "./IPostsRepository";

@EntityRepository(Post)
export class PostsRepository implements IPostsRepository {

    private repository: Repository<Post>;

    constructor() {
        this.repository = getRepository(Post);
    }
    
    //
    async list(): Promise<Post[]> {
        
        const posts = await this.repository.find()

        return posts;
    }

}