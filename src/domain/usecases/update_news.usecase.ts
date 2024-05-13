import {Injectable} from "@nestjs/common";
import {NewsService} from "../../data/services/news.service";
import {News} from "../models/news";

@Injectable()
export class UpdateNewsUsecase {
    constructor(private newsService: NewsService) {
    }

    public execute(id: number, newsData: Partial<News>): Promise<News> {
        return this.newsService.updateNews(id, newsData);
    }
} 