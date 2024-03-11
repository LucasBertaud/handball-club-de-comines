import { Module } from '@nestjs/common';
import { PresentationModule } from './presentation/presentation.module';
import { DomainModule } from './domain/domain.module';
import { DataModule } from './data/data.module';
import { databaseProviders } from './database.providers';

@Module({
  imports: [PresentationModule, DomainModule, DataModule],
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
