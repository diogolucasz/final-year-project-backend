import { Router } from "express";
import listPostsController from '../modules/posts/useCases/listPosts';
import createPostController from '../modules/posts/useCases/createPost';
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

export const postsRoutes = Router();

postsRoutes.get("/", (request, response) => {
    return listPostsController().handle(request, response)
});

//postsRoutes.use(ensureAuthenticated)
postsRoutes.post("/", ensureAuthenticated, (request, response) => {
    return createPostController().handle(request, response)
});