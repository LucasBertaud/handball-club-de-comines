import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {GetAllNewsUsecase} from "../domain/usecases/news/get_all_news.usecase";
import {CreateNewsUsecase} from "../domain/usecases/news/create_news.usecase";
import {CreateNewsDto} from "./dtos/create_news.dto";
import {News} from "../domain/models/news";
import {DeleteNewsUsecase} from "../domain/usecases/news/delete_news.usecase";
import {UpdateNewsUsecase} from "../domain/usecases/news/update_news.usecase";
import {GetNewsByIdUsecase} from "../domain/usecases/news/get_news_by_id.usecase";

@ApiTags("News")
@Controller("news")
export class NewsController {
    constructor(
        private getAllNewsUsecase: GetAllNewsUsecase,
        private getNewsByIdUsecase: GetNewsByIdUsecase,
        private createNewsUsecase: CreateNewsUsecase,
        private updateNewsUsecase: UpdateNewsUsecase,
        private deleteNewsUsecase: DeleteNewsUsecase,
    ) {
    }

    @Get()
    async getNews() {
        return this.getAllNewsUsecase.execute();
    }

    @Get(":id")
    async getNewsById(
        @Param("id") id: number,
    ) {
        return this.getNewsByIdUsecase.execute(id);
    }

    @Post()
    async createNews(
        @Body() dto: CreateNewsDto,
    ) {
        const news = new News(dto.title, dto.image, dto.content, dto.publication_date, dto.member);
        return this.createNewsUsecase.execute(news);
    }

    @Put(":id")
    async updateNews(
        @Param("id") id: number,
        @Body() newsData: CreateNewsDto,
    ): Promise<News> {
        return this.updateNewsUsecase.execute(id, newsData);
    }

    @Delete(":id")
    async deleteNews(@Param("id") id: number) {
        return this.deleteNewsUsecase.execute(id);
    }
}