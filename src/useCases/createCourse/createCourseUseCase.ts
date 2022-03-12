import { getRepository } from "typeorm";
import { Course } from "../../modules/users/entities/Course";

interface CourseRequest {
    name: string;
    description: string;
};

export class CreateCourseUseCase {

    async execute({ name, description }: CourseRequest) {

        const courseRepository = getRepository(Course)

        const course = courseRepository.create({
            name,
            description,
        });

        await courseRepository.save(course);

        return course;
    }
}
