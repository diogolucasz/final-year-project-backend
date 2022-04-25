import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { is } from '../middlewares/permissions';
import createCourseController from '../useCases/createCourse';

export const coursesRoutes = Router();

coursesRoutes.use(ensureAuthenticated)
coursesRoutes.post("/", is(["TEdSTE"]), (request, response) => {
    return createCourseController().handle(request, response)
});