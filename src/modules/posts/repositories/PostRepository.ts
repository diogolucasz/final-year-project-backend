import { Entity, EntityRepository, getRepository, Repository } from "typeorm";
import { Post } from "../entities/Post";
import { IPostsRepository } from "../dto/IPostsRepository";
import { ICreatePostDTO } from "../dto/ICreatePostDTO";

@EntityRepository(Post)
export class PostsRepository implements IPostsRepository {

    private repository: Repository<Post>;

    constructor() {
        this.repository = getRepository(Post);
    }

    async create(data: ICreatePostDTO): Promise<Post> {

        const post = this.repository.create(data);

        await this.repository.save(post);

        return post;
    }

    //
    // async create(post: ICreatePostDTO): Promise<Post> {

    //     return this.repository.save(post);

    // }

    //
    async save(post: Post): Promise<Post> {

        return this.repository.save(post);
    }

    //
    // async save(data: Post): Promise<Post> {

    //     const post = this.repository.create(data);

    //     await this.repository.save(post);

    //     return post;
    // }

    //
    async list(): Promise<Post[]> {

        const posts = await this.repository.find({
            relations: ['user']
        })
        
        return posts;
    }

}