import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { ArticlesController } from './articles.controller';
@Module({
  imports: [DomainModule],
  controllers: [ArticlesController],
  providers: [],
})
export class PresentationModule {}
