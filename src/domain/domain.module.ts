import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { ClientsMock } from 'src/data/mocks/clients.mocks/clients.mocks';

@Module({
  imports: [DataModule],
  providers: [ClientsMock],
  exports: [ClientsMock]
})
export class DomainModule {}
