import { getRepository } from "typeorm";
import { ICoursesRepository } from "../../modules/courses/ICourseRepository";
import { Course } from "../../modules/courses/entities/Course";

interface CourseRequest {
    name: string;
    description: string;
};

export class CreateCourseUseCase {

    constructor(
        private coursesRepository: ICoursesRepository,
    ) { }

    //private usersRepository: IUsersRepository,

    async execute({ name, description }: CourseRequest) {

        //const courseRepository = getRepository(Course)

        const course = this.coursesRepository.create({
            name,
            description,
        });

        await this.coursesRepository.save(await course);

        return course;
    }
}
