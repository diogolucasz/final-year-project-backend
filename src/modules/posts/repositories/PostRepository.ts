import { EntityRepository, getRepository, Repository } from "typeorm";
import { Post } from "../entities/Post";
import { IPostsRepository } from "../dto/IPostsRepository";
import { ICreatePostDTO } from "../dto/ICreatePostDTO";

@EntityRepository(Post)
export class PostsRepository implements IPostsRepository {

    private repository: Repository<Post>;

    constructor() {
        this.repository = getRepository(Post);
    }

    //
    // async findAvailiblePosts(username?: string, course?: string):Promise<Post> {

    // }

    async findAvailiblePosts(
        subject?: string,
        username?: string,
        course_id?: string,
      ): Promise<Post[]> {

        const postsQuery = this.repository
        .createQueryBuilder("SELECT * FROM POSTS, USERS")
       
        if (username) {
            postsQuery.andWhere("users.username = :username", { username });
        }
        if (course_id) {
            postsQuery.andWhere("users.course_id = :course_id", { course_id });
        }
        if (subject) {
            postsQuery.andWhere("posts.subject = :subject", { subject });
        }
    
        const posts = await postsQuery.getMany();
    
        return posts;
    }

    //
    async create(data: ICreatePostDTO): Promise<Post> {

        const post = this.repository.create(data);

        await this.repository.save(post);

        return post;
    }

    //
    async save(post: Post): Promise<Post> {

        return this.repository.save(post);
    }

    //
    async list(): Promise<Post[]> {

        const posts = await this.repository.find({
            relations: ['user']
        })

        return posts;
    }

}