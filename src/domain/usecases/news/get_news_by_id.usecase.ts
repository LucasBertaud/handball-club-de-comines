import {Injectable} from "@nestjs/common";
import {NewsService} from "../../../data/services/news.service";

@Injectable()
export class GetNewsByIdUsecase {
    constructor(private newsService: NewsService) {
    }

    public execute(id: number): any {
        return this.newsService.findById(id);
    }
}