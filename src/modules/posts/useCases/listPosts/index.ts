import { PostsRepository } from "../../repositories/PostRepository";
import { ListPostsController } from "./ListPostController";
import { ListPostsUseCase } from "./ListPostsUseCase";



export default (): ListPostsController => {
    
    const postsRepository = new PostsRepository();

    const listPostsUserCase = new ListPostsUseCase(
        postsRepository
    )

    const listPostsController = new ListPostsController(
        listPostsUserCase
    )

    return listPostsController;
}