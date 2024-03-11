import { Injectable } from '@nestjs/common';
import { ClientsMock } from 'src/data/mocks/clients.mocks/clients.mocks';


@Injectable()
export class GetAllClientsUseCase {

    constructor(private ClientsMock: ClientsMock) {
        
    }

    execute() {
        return this.ClientsMock.getAllClients();
    }
}
