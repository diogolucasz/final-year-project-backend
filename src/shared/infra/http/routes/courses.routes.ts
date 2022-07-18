import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { is } from '../middlewares/permissions';


import createCourseController from '../../../../modules/courses/useCases/createCourse';
import listCoursesController from '../../../../modules/courses/useCases/listCourses';

export const coursesRoutes = Router();


coursesRoutes.post("/", ensureAuthenticated, is(["ADMIN"]), (request: any, response) => {
    return createCourseController().handle(request, response)
});


coursesRoutes.use(ensureAuthenticated)
coursesRoutes.get("/", (request: any, response) => {
    return listCoursesController().handle(request, response)
});