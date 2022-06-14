import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { is } from '../middlewares/permissions';
import createCourseController from '../modules/courses/useCases/createCourse';

export const coursesRoutes = Router();

//coursesRoutes.use(ensureAuthenticated)
//is(["TEdSTE"])
coursesRoutes.post("/", ensureAuthenticated, (request: any, response) => {
    return createCourseController().handle(request, response)
});