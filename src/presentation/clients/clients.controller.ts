import { Controller, Get } from '@nestjs/common';
import { GetAllClientsUseCase } from 'src/domain/usecases/get_all_clients/get_all_clients.usecase';

@Controller('clients')
export class ClientsController {

    constructor(private getAllClientUsecase: GetAllClientsUseCase) { }

    @Get()
    getClients() {
        return this.getAllClientUsecase.execute();
    }
}
