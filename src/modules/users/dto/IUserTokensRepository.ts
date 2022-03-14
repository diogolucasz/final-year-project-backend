import { ICreateUserTokenDTO } from "./ICreateUserTokenDTO";
import { UserTokens } from "../entities/UserTokens";


export interface IUsersTokensRepository {
    create({ user_id, refresh_token, expires_date }: ICreateUserTokenDTO) : Promise<UserTokens>

    findByUserId(user_id: string, refresh_token: string): Promise<UserTokens>

    deleteById(id: string): Promise<void>
}