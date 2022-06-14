import { UserRepository } from "../../../users/repositories/UsersRepository";
import { PostsRepository } from "../../repositories/PostRepository";
import { CreatePostController } from "./CreatePostController";
import { CreatePostUseCase } from "./CreatePostUseCase";


export default (): CreatePostController => {
    
    const postsRepository = new PostsRepository();
    const usersRepository = new UserRepository();

    const createPostUseCase = new CreatePostUseCase(
        postsRepository,
        usersRepository
    )

    const createPostsController = new CreatePostController(
        createPostUseCase
    )

    return createPostsController;
}