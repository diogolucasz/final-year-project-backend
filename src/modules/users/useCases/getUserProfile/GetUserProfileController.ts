import { GetUserProfileUseCase } from "./GetUserProfileUseCase";

export class GetUserProfileController {

    constructor(
        private getUserProfileUseCase: GetUserProfileUseCase
    ) { }

    async handle(request: Request | any, response: any): Promise<Response> {

        const { id } = request.query;

        const user = await this.getUserProfileUseCase.execute({id})

        return response.json(user);
    }
}

