import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { CreateArticleUsecase } from './usecases/create_article.usecase';
import { GetAllArticlesUsecase } from './usecases/get_all_articles.usecase';
import { CreateAdversaryTeamsUsecase } from './usecases/create_adversary_teams.usecase';
import { GetAllAdversaryTeamsUsecase } from './usecases/get_all_adversary_teams.usecase';

@Module({
  imports: [DataModule],
  providers: [CreateArticleUsecase, GetAllArticlesUsecase, CreateAdversaryTeamsUsecase, GetAllAdversaryTeamsUsecase ],
  exports: [CreateArticleUsecase, GetAllArticlesUsecase, CreateAdversaryTeamsUsecase, GetAllAdversaryTeamsUsecase]
})
export class DomainModule {}
