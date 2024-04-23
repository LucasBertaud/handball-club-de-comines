import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { PlayEntity } from "../entities/play.entity";

@Injectable()
export class PlayService {
    constructor(
        @InjectRepository(PlayEntity)
        private playRepository: Repository<PlayEntity>,
    ) {
    }

    async findAll(): Promise<PlayEntity[]> {
        return this.playRepository.find();
    }

    async createPlay(play: PlayEntity): Promise<any> {
        // Crée une nouvelle instance d'ArticleEntity à partir des propriétés de l'objet Article
        const playEntity = this.playRepository.create({
            memberId: play.memberId,
            matchId: play.matchId
        });
        // Enregistre l'entité dans la base de données et retourne l'instance sauvegardée,
        // qui inclura l'ID généré et d'autres modifications potentielles effectuées lors de la sauvegarde
        return this.playRepository.save(playEntity);
    }
}