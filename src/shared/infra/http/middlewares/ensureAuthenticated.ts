import { NextFunction, Response, Request } from "express";
import { verify } from 'jsonwebtoken';
import auth from "../../../../config/auth";

import { AppError } from "../../../../shared/errors/AppError";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request | any, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError(401, "Token missing");
    }

    const [, token] = authHeader.split(" ");

    try {

        const { sub: user_id } = verify(
            token,
            auth.secret_token
        ) as IPayload;

        request.user = {
            id: user_id,
        };

        next();

    } catch {
        throw new AppError(401, "Invalid token!");
    }

}