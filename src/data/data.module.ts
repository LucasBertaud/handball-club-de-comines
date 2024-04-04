import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleService } from './services/article.service';
import { ArticleEntity } from './entities/article.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/data/databases/hcc.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Utilisez `synchronize: true` uniquement en développement
    }),
    TypeOrmModule.forFeature([
      ArticleEntity
    ])
  ],
  exports: [
    ArticleService
  ],
  providers: [ArticleService],
})
export class DataModule { }
