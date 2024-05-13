import {Body, Controller, Get, Post} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {GetAllNewsUsecase} from "../domain/usecases/get_all_news.usecase";
import {CreateNewsUsecase} from "../domain/usecases/create_news.usecase";
import {CreateNewsDto} from "./dtos/create_news.dto";
import {News} from "../domain/models/news";

@ApiTags("News")
@Controller("news")
export class NewsController {
    constructor(
        private getAllNewsUsecase: GetAllNewsUsecase,
        private createNewsUsecase: CreateNewsUsecase,
    ) {
    }

    @Get()
    async getNews() {
        return this.getAllNewsUsecase.execute();
    }

    @Post()
    async createNews(
        @Body() dto: CreateNewsDto,
    ) {
        const news = new News(dto.title, dto.image, dto.content, dto.publication_date, dto.member);
        return this.createNewsUsecase.execute(news);
    }
}