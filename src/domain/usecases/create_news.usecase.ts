import {Injectable} from "@nestjs/common";
import {NewsService} from "../../data/services/news.service";
import {News} from "../models/news";

@Injectable()
export class CreateNewsUsecase {
    constructor(private newsService: NewsService) {
    }

    public execute(news: News): any {
        return this.newsService.createNews(news);
    }
}