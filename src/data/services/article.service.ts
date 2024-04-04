import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ArticleEntity } from "../entities/article.entity";
import { Repository } from "typeorm";
import { Article } from "src/domain/models/article";

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(ArticleEntity)
        private articleRepository: Repository<ArticleEntity>,
    ) { }
    async findAll(): Promise<ArticleEntity[]> {
        return this.articleRepository.find();
    }
    async createArticle(article: Article): Promise<any> {
        // Crée une nouvelle instance d'ArticleEntity à partir des propriétés de l'objet Article
        const articleEntity = this.articleRepository.create({
            title: article.title,
            content: article.content
        });
        // Enregistre l'entité dans la base de données et retourne l'instance sauvegardée,
        // qui inclura l'ID généré et d'autres modifications potentielles effectuées lors de la sauvegarde
        return this.articleRepository.save(articleEntity);
    }
}