import { Module } from '@nestjs/common';
import { ClientsController } from './clients/clients.controller';
import { DomainModule } from 'src/domain/domain.module';
import { GetAllClientsUseCase } from 'src/domain/usecases/get_all_clients/get_all_clients.usecase';
@Module({
  imports: [DomainModule],
  controllers: [ClientsController],
  providers: [GetAllClientsUseCase],
})
export class PresentationModule {}
