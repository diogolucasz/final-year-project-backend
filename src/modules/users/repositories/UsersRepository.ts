import { EntityRepository, getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { IUsersRepository } from "./IUsersRepository";


@EntityRepository(User)
export class UserRepository implements IUsersRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User)
    }
    
    findOne(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
    async findByEmail(email: string): Promise<User> {
        
        const user = await this.repository.findOne({ email });
        
        return user;
    }
    
    async save(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async create(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
}

