import { ICreateUserTokenDTO } from "../dto/ICreateUserTokenDTO";
import { UserTokens } from "../entities/UserTokens";


export interface IUsersTokensRepository {
    create({ user_id, refresh_token, expires_date }: ICreateUserTokenDTO) : Promise<UserTokens>
}