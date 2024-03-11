import { Module } from '@nestjs/common';
import { ClientsMock } from './mocks/clients.mocks/clients.mocks';

@Module({
  providers: [ClientsMock]
})
export class DataModule {}
