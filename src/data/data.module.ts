import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleService } from './services/article.service';
import { ArticleEntity } from './entities/article.entity';
import { AdversaryTeamsService } from './services/adversary_teams.service';
import { AdversaryTeamsEntity } from './entities/adversary_teams.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/data/databases/hcc.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Utilisez `synchronize: true` uniquement en développement
    }),
    TypeOrmModule.forFeature([
      ArticleEntity,
      AdversaryTeamsEntity
    ])
  ],
  exports: [
    ArticleService,
    AdversaryTeamsService
  ],
  providers: [
    ArticleService, 
    AdversaryTeamsService
  ],
})
export class DataModule { }
