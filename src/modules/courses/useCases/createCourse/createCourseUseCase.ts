import { AppError } from "../../../../shared/errors/AppError";
import { ICoursesRepository } from "../../dto/ICourseRepository";


interface CourseRequest {
    name: string;
    description: string;
};

export class CreateCourseUseCase {

    constructor(
        private coursesRepository: ICoursesRepository,
    ) { }

    async execute({ name, description }: CourseRequest) {

        const courseAlreadyExists = await this.coursesRepository.findByName(name);

        if (courseAlreadyExists) {
            throw new AppError(400, `Course ${name} already exists.`)
        }

        const course = this.coursesRepository.create({
            name,
            description,
        });

        await this.coursesRepository.save(await course);

        return course;
    }
}
