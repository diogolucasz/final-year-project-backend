import { CoursesRepository } from "../../repositories/CourseRepository";
import { ListCoursesController } from "./listCoursesController";
import { ListCoursesUseCase } from "./listCoursesUseCase";

export default (): ListCoursesController => {

    const courseRepository = new CoursesRepository();

    const listCoursesUseCase = new ListCoursesUseCase(
        courseRepository
    )

    const listCoursesController = new ListCoursesController(
        listCoursesUseCase
    )

    return listCoursesController;
}