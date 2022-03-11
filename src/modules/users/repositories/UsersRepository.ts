import { EntityRepository, getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { User } from "../entities/User";
import { IUsersRepository } from "../dto/IUsersRepository";


@EntityRepository(User)
export class UserRepository implements IUsersRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }


    async findByEmail(email: string): Promise<User> {

        const user = await this.repository.findOne(email);

        return user;
    }

    async save(user: User): Promise<User> {

        return this.repository.save(user);
    }

    async create(data: ICreateUserDTO): Promise<User> {

        const user = this.repository.create(data);

        await this.repository.save(user);

        return user;
    }
}

