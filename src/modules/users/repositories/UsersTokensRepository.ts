import { getRepository, Repository } from "typeorm";
import { ICreateUserTokenDTO } from "../dto/ICreateUserTokenDTO";
import { UserTokens } from "../entities/UserTokens";

import { IUsersTokensRepository } from "./UserTokensRepository";

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