import { Injectable } from '@nestjs/common';
import { ArticleService } from 'src/data/services/article.service';

@Injectable()
export class DeleteArticleUsecase {
    constructor(private articleService: ArticleService) { }
    public execute(id: number): any {
        return this.articleService.deleteArticle(id);
    }
}