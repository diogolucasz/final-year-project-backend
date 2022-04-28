import { Router } from "express";
import listPostsController from '../modules/posts/useCases/listPosts';


export const postsRoutes = Router();


postsRoutes.get("/", (request, response) => {
    return listPostsController().handle(request, response)
});