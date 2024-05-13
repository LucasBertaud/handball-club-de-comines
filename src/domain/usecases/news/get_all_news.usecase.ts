import {Injectable} from "@nestjs/common";
import {NewsService} from "../../../data/services/news.service";

@Injectable()
export class GetAllNewsUsecase {
    constructor(private newsService: NewsService) {
    }

    public execute(): any {
        return this.newsService.findAll();
    }
}   