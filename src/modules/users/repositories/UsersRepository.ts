import { Repository, EntityRepository } from "typeorm";
//import { UserRepository } from "../../../repositories";
import { User } from "../entities/User";


@EntityRepository(User)
export class UserRepository extends Repository<User> {

	users: User[] = [];

	async findByEmail(email: string): Promise<User> {

		const userRepository = UserRepository()

		const user = await userRepository.findByEmail(email);
		
		//this.users.find((user) => user.email === email);

		return user;
	}
}

