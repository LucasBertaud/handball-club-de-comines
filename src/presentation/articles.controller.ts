import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {CreateArticleUsecase} from "src/domain/usecases/article/create_article.usecase";
import {GetAllArticlesUsecase} from "src/domain/usecases/article/get_all_articles.usecase";
import {DeleteArticleUsecase} from "src/domain/usecases/article/delete_article.usecase";
import {Article} from "src/domain/models/article";
import {CreateArticleDto} from "./dtos/create_article.dto";
import {ApiTags} from "@nestjs/swagger";
import {UpdateArticleUsecase} from "src/domain/usecases/article/update_article.usecase";

@ApiTags("Articles")
@Controller("articles")
export class ArticlesController {
    constructor(
        private getAllArticlesUsecase: GetAllArticlesUsecase,
        private createArticleUsecase: CreateArticleUsecase,
        private deleteArticleUsecase: DeleteArticleUsecase,
        private updateArticleUsecase: UpdateArticleUsecase,
    ) {
    }

    @Get()
    async getArticles() {
        return this.getAllArticlesUsecase.execute();
    }

    @Post()
    async createArticle(
        @Body() dto: CreateArticleDto,
    ) {
        const article = new Article(dto.title, dto.content);
        return this.createArticleUsecase.execute(article);
    }

    @Put(":id")
    async updateArticle(
        @Param("id") id: number,
        @Body() articleData: CreateArticleDto,
    ): Promise<Article> {
        return this.updateArticleUsecase.execute(id, articleData);
    }

    @Delete(":id")
    async deleteArticle(@Param("id") id: number) {
        return this.deleteArticleUsecase.execute(id);
    }
}