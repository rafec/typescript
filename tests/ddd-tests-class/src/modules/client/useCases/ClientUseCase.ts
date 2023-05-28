import { Client } from "../../../model/Client";

export class ClientUseCase {
    public register(): void {

    };

    public recoverById(id: number): Client {
        return new Client(1, 'Rafael', 'rafael@mail.com', '123456789');
    };

    public recoverAll(): any {
        return null;
    };
};