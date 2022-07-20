import { Router } from "express";

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import listPostsController from '../../../../modules/posts/useCases/listPosts';
import createPostController from '../../../../modules/posts/useCases/createPost';

export const postsRoutes = Router();

postsRoutes.get("/", (request, response) => {
    return listPostsController().handle(request, response)
});

postsRoutes.use(ensureAuthenticated)
postsRoutes.post("/", ensureAuthenticated, (request, response) => {
    return createPostController().handle(request, response)
});