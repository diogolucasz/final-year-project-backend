import { UserTokens } from "../entities/UserTokens";
import { ICreateUserTokenDTO } from "../../../repositories/ICreateUserTokenDTO";

export interface IUsersTokensRepository {
    create({ user_id, refresh_token, expires_date }: ICreateUserTokenDTO) : Promise<UserTokens>
}