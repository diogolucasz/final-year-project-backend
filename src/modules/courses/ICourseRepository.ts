import { Course } from "./entities/Course";
import { ICreateCourseDTO } from "./ICreateCourseDTO";

export interface ICoursesRepository {
    //findByEmail(email: string): Promise<User>;
    create(data: ICreateCourseDTO): Promise<Course>;
    save(course: Course): Promise<Course>;
}