import { EntityRepository, getRepository, Repository } from "typeorm";
import { ICoursesRepository } from "../dto/ICourseRepository";
import { ICreateCourseDTO } from "../dto/ICreateCourseDTO";
import { Course } from "../entities/Course";

@EntityRepository(Course)
export class CoursesRepository implements ICoursesRepository {

    private repository: Repository<Course>;

    constructor() {
        this.repository = getRepository(Course);
    }

    //
    async findByName(name: string): Promise<Course> {

        const course = await this.repository.findOne({ where:
            { name }
        });

        return course;
    }

    //
    async save(course: Course): Promise<Course> {

        return this.repository.save(course);
    }

    //
    async create(data: ICreateCourseDTO): Promise<Course> {

        const course = this.repository.create(data);

        await this.repository.save(course);

        return course;
    }

    //
    async list(): Promise<Course[]> {
        
        const courses = await this.repository.find()

        return courses;
    }
}

