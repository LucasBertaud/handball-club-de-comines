import {Injectable} from "@nestjs/common";
import {NewsService} from "../../data/services/news.service";

@Injectable()
export class DeleteNewsUsecase {
    constructor(private newsService: NewsService) {
    }

    public execute(id: number): any {
        return this.newsService.deleteNews(id);
    }
}    