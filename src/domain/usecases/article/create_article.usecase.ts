import {Injectable} from "@nestjs/common";
import {ArticleService} from "src/data/services/article.service";
import {Article} from "../../models/article";

@Injectable()
export class CreateArticleUsecase {
    constructor(private articleService: ArticleService) {
    }

    public execute(article: Article): any {
        return this.articleService.createArticle(article);
    }
}