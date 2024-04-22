import {Module} from "@nestjs/common";
import {DataModule} from "src/data/data.module";
import {CreateArticleUsecase} from "./usecases/create_article.usecase";
import {GetAllArticlesUsecase} from "./usecases/get_all_articles.usecase";
import {CreateMembersUsecase} from "./usecases/create_members.usecase";
import {GetAllMembersUsecase} from "./usecases/get_all_members.usecase";

@Module({
    imports: [DataModule],
    providers: [
        GetAllArticlesUsecase, CreateArticleUsecase,
        GetAllMembersUsecase, CreateMembersUsecase,
    ],
    exports: [
        GetAllArticlesUsecase, CreateArticleUsecase,
        GetAllMembersUsecase, CreateMembersUsecase,
    ],
})
export class DomainModule {
}
