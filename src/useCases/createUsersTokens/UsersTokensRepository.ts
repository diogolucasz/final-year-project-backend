import { getRepository, Repository } from "typeorm";
import { UserTokens } from "../../modules/users/entities/UserTokens";
import { ICreateUserTokenDTO } from "../../repositories/ICreateUserTokenDTO";
import { IUsersTokensRepository } from "../../modules/users/repositories/UserTokensRepository";

export class UsersTokensRepository implements IUsersTokensRepository{
    
    private repository: Repository<UserTokens>;

    constructor() {
        this.repository = getRepository(UserTokens)
    }
    
    async create({ user_id, refresh_token, expires_date }: ICreateUserTokenDTO): Promise<UserTokens> {
        
        const userToken = this.repository.create({
            user_id,
            expires_date,
            refresh_token,
        });

        await this.repository.save(userToken)

        return userToken
    }

}