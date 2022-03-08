import { UserTokens } from "../modules/users/entities/UserTokens";
import { ICreateUserTokenDTO } from "./ICreateUserTokenDTO";

export interface IUsersTokensRepository {
    create({ user_id, refresh_token, expires_date }: ICreateUserTokenDTO) : Promise<UserTokens>
}