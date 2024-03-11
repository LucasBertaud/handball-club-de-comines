import { Module } from '@nestjs/common';
import { PresentationModule } from './presentation/presentation.module';
import { DomainModule } from './domain/domain.module';
import { DataModule } from './data/data.module';

@Module({
  imports: [PresentationModule, DomainModule, DataModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
