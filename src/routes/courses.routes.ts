import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import createCourseController from '../useCases/createCourse';

export const coursesRoutes = Router();

coursesRoutes.use(ensureAuthenticated)
coursesRoutes.post("/", (request, response) => {
    return createCourseController().handle(request, response)
});