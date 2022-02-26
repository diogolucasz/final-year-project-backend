import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { ICreateUserDTO, IUsersRepository } from "./IUsersRepository";

export class UserRepository implements IUsersRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ name, surname, username, password, email }: ICreateUserDTO): Promise<void> {

        const user = this.repository.create({
            name,
            surname,
            username,
            password,
            email
        })

        await this.repository.save(user);
    }

}