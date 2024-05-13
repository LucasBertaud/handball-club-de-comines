import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {PlayEntity} from "../entities/play.entity";
import { Play } from "src/domain/models/play";
import { MatchesEntity } from "../entities/matches.entity";
import { MembersEntity } from "../entities/members.entity";

@Injectable()
export class PlayService {
    constructor(
        @InjectRepository(PlayEntity) 
        private playRepository: Repository<PlayEntity>,
        @InjectRepository(MatchesEntity) 
        private matchesRepository: Repository<MatchesEntity>,
        @InjectRepository(MembersEntity) 
        private membersRepository: Repository<MembersEntity>,
    ) {
    } 

    async findAll(): Promise<PlayEntity[]> {
        return this.playRepository.find(); 
    }

    async createPlay(play: Play): Promise<any> {
        const match = await this.matchesRepository.findOne({ where: { id: play.matchId } })
        const member = await this.membersRepository.findOne({where: {email: play.memberId}})
        const playEntity = this.playRepository.create({
            match: match,
            member: member,
            matchId: play.matchId,
            memberId: play.memberId
        });
        return this.playRepository.save(playEntity);  
    } 

    async deletePlay(id: number): Promise<void> {
        await this.playRepository.delete(id);
    }

    async updatePlay(id: number, play: Play): Promise<void> {
        const match = await this.matchesRepository.findOne({ where: { id: play.matchId } })
        const member = await this.membersRepository.findOne({where: { email: play.memberId}})
        await this.playRepository.update(id, {
            match: match,
            member: member,
            matchId: play.matchId,
            memberId: play.memberId
        })
    }
}