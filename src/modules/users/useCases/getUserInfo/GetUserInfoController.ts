import { GetUserInfoUseCase } from "./GetUserInfoUseCase";

export class GetUserInfoController {

    constructor(
        private getUserInfoUseCase: GetUserInfoUseCase
    ) { }

    async handle(request: Request | any, response: Response): Promise<Response> {


        const { id } = request.user;

        const user = await this.getUserInfoUseCase.execute({id})

        return response.json(user);
    }
}