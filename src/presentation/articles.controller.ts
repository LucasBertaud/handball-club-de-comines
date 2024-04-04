import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateArticleUsecase } from 'src/domain/usecases/create_article.usecase';
import { GetAllArticlesUsecase } from 'src/domain/usecases/get_all_articles.usecase';
import { Article } from 'src/domain/models/article';
import { CreateArticleDto } from './dtos/create_article.dto';

@Controller('articles')
export class ArticlesController {
    constructor(
        private getAllArticlesUsecase: GetAllArticlesUsecase,
        private createArticleUsecase: CreateArticleUsecase
    ) { }

    @Get()
    getArticles() {
        return this.getAllArticlesUsecase.execute();
    }
    
    @Post()
    createArticle(
        @Body() dto: CreateArticleDto
    ) {
        const article = new Article(dto.title, dto.content);
        return this.createArticleUsecase.execute(article);
    }
}