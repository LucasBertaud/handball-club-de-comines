import {Injectable} from "@nestjs/common";
import {ArticleService} from "src/data/services/article.service";
import {Article} from "../../models/article";

@Injectable()
export class UpdateArticleUsecase {
    constructor(private articleService: ArticleService) {
    }

    public execute(id: number, articleData: Partial<Article>): Promise<Article> {
        return this.articleService.updateArticle(id, articleData);
    }
}