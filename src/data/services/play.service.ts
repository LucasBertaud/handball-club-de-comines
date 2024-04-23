import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {PlayEntity} from "../entities/play.entity";
import { Play } from "src/domain/models/play";

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

    async createPlay(play: Play): Promise<any> {
        const playEntity = this.playRepository.create({
            match: play.match,
            member: play.member,
            matchId: play.matchId,
            memberId: play.memberId
        });
        return this.playRepository.save(playEntity);  
    } 

    async deletePlay(id: number): Promise<void> {
        await this.playRepository.delete(id);
    }

    async updatePlay(id: number, play: Play): Promise<void> {
        await this.playRepository.update(id, {
            match: play.match,
            member: play.member,
            matchId: play.matchId,
            memberId: play.memberId
        })
    }
}