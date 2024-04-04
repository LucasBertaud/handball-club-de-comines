import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { CreateArticleUsecase } from './usecases/create_article.usecase';
import { GetAllArticlesUsecase } from './usecases/get_all_articles.usecase';

@Module({
  imports: [DataModule],
  providers: [CreateArticleUsecase, GetAllArticlesUsecase],
  exports: [CreateArticleUsecase, GetAllArticlesUsecase]
})
export class DomainModule {}
