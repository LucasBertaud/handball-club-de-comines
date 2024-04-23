import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { NewsEntity } from "../entities/news.entity";
import { News } from "src/domain/models/news";

@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(NewsEntity)
        private newsRepository: Repository<NewsEntity>,
    ) {
    }

    async findAll(): Promise<NewsEntity[]> {
        return this.newsRepository.find();
    }

    async createNews(news: News): Promise<any> {
        const newsEntity = this.newsRepository.create({
            content: news.content,
            image: news.image,
            member: news.member,
            publication_date: news.publication_date,
            title: news.title
        });
        return this.newsRepository.save(newsEntity);
    }

    async deleteNews(id: number): Promise<void> {
        await this.newsRepository.delete(id);
    }

    async updateNews(id: number, news: News): Promise<void> {
        await this.newsRepository.update(id, {
            content: news.content,
            image: news.image,
            member: news.member,
            publication_date: news.publication_date,
            title: news.title
        })
    }
}