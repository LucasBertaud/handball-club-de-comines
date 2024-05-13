import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ArticleService} from "./services/article.service";
import {ArticleEntity} from "./entities/article.entity";
import {MembersEntity} from "./entities/members.entity";
import {MembersService} from "./services/members.service";
import {AdversaryTeamsEntity} from "./entities/adversary_teams.entity";
import {AdversaryTeamsService} from "./services/adversary_teams.service";
import {PlayEntity} from "./entities/play.entity";
import {PlayService} from "./services/play.service";
import {MatchesEntity} from "./entities/matches.entity";
import {MatchesService} from "./services/matches.service";
import {NewsEntity} from "./entities/news.entity";
import {NewsService} from "./services/news.service";
import { PlayController } from "src/presentation/play.controller";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "sqlite",
            database: "./src/data/databases/hcc.sqlite",
            entities: [__dirname + "/**/*.entity{.ts,.js}"],
            synchronize: true, // Utilisez `synchronize: true` uniquement en développement
        }),
        TypeOrmModule.forFeature([
            ArticleEntity,
            MembersEntity,
            MembersService,
            AdversaryTeamsEntity,
            AdversaryTeamsService,
            PlayEntity,
            PlayService,
            MatchesEntity,
            MatchesService,
            NewsEntity,
            NewsService,
        ]),
    ],
    exports: [
        ArticleService,
        MembersService,
        AdversaryTeamsService,
        PlayService,
        MatchesService,
        NewsService,
    ],
    providers: [
        ArticleService,
        MembersService,
        AdversaryTeamsService,
        PlayService,
        MatchesService,
        NewsService,
    ],
})
export class DataModule {
}
