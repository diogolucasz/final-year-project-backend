import { Request, Response } from "express";
import { RefreshTokenUseCase } from "./RefreshTokenUseCase";

export class RefreshTokenController {

    constructor(
        private refreshtokenUseCase: RefreshTokenUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const token =
            request.body.token ||
            request.headers["x-access-token"] ||
            request.query.token;

        const refresh_token = await this.refreshtokenUseCase.execute(token);

        return response.json(refresh_token);
    }
}