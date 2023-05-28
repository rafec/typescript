import { ClientUseCase } from "./ClientUseCase";

test('Testing client recover', () => {
    const clientUseCase: ClientUseCase = new ClientUseCase();
    expect(clientUseCase.recoverById(1)).toBeDefined();
});