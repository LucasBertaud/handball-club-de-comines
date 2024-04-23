import {Module} from "@nestjs/common";
import {DataModule} from "src/data/data.module";
import {CreateArticleUsecase} from "./usecases/create_article.usecase";
import {GetAllArticlesUsecase} from "./usecases/get_all_articles.usecase";
import {CreateMembersUsecase} from "./usecases/create_members.usecase";
import {GetAllMembersUsecase} from "./usecases/get_all_members.usecase";
import {GetAllAdversaryTeamsUsecase} from "./usecases/get_all_adversary_teams.usecase";
import {CreateAdversaryTeamsUsecase} from "./usecases/create_adversary_teams.usecase";

@Module({
    imports: [DataModule],
    providers: [
        GetAllArticlesUsecase, CreateArticleUsecase,
        GetAllMembersUsecase, CreateMembersUsecase,
        GetAllAdversaryTeamsUsecase, CreateAdversaryTeamsUsecase,
    ],
    exports: [
        GetAllArticlesUsecase, CreateArticleUsecase,
        GetAllMembersUsecase, CreateMembersUsecase,
        GetAllAdversaryTeamsUsecase, CreateAdversaryTeamsUsecase,
    ],
})
export class DomainModule {
}
