import { Injectable } from '@nestjs/common';
import { ArticleService } from 'src/data/services/article.service';

@Injectable()
export class GetAllArticlesUsecase {
    constructor(private articleService: ArticleService) { }
    public execute(): any {
        return this.articleService.findAll();
    }
}