import { EntityRepository, getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../dto/ICreateUserDTO";
import { User } from "../../../modules/users/entities/User";
import { IUsersRepository } from "../dto/IUsersRepository";
import { Role } from "../entities/Role";
import { IAssignRole } from "../dto/IAssignRole";
import { Permission } from "../entities/Permission";
import { getConnection } from "typeorm";
import { Post } from "../../../modules/posts/entities/Post";


@EntityRepository(User)
export class UserRepository implements IUsersRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }


    async assignRole({ id, roles }: IAssignRole) {

        await this.repository
            .createQueryBuilder()
            .update()
            .set({ roles })
            .where("id = :id", { id })
            .execute();

    }

    async getProfileById(id: string) {

        const user = await getConnection()
            .createQueryBuilder()
            .select(["users","posts"])
            .from(User, "users")
            .where("users.id = :id", { id })
            .andWhere("posts.user_id = :id", {id})
            .innerJoin(Post,"posts")
            .getMany();

        return user
    }

    async findRoleByUserID(id: string): Promise<any> {

        const user = await this.repository.findOne(
            { id },
            { relations: ["roles"] }
        );

        const roles = user.roles.map(role => role.name)
        return roles;
    }

    async findById(id: string): Promise<User> {

        const user = await this.repository.findOne({
            where:
                { id }
        });

        return user;
    }

    async findBySubject(sub: string) {

        const roles = await this.repository.findOne(sub, { relations: ['roles'] })

        return roles;
    }

    async findByEmail(email: string): Promise<User> {

        const user = await this.repository.findOne({
            where:
                { email }
        });

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

