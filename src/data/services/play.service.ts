import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {PlayEntity} from "../entities/play.entity";
import {Play} from "src/domain/models/play";
import {MatchesEntity} from "../entities/matches.entity";
import {MembersEntity} from "../entities/members.entity";

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

    async findOneById(memberId: string, matchId: number): Promise<Play> {
        return this.playRepository.findOneBy({
            memberId: memberId,
            matchId: matchId,
        });
    }

    async createPlay(play: Play): Promise<any> {
        const match = await this.matchesRepository.findOne({where: {id: play.matchId}});
        const member = await this.membersRepository.findOne({where: {email: play.memberId}});
        const playEntity = this.playRepository.create({
            match: match,
            member: member,
            matchId: play.matchId,
            memberId: play.memberId,
        });
        return this.playRepository.save(playEntity);
    }

    async deletePlay(memberId: string, matchId: number): Promise<void> {
        console.log(memberId);
        console.log(matchId);

        const play = await this.playRepository.findOneBy({
            memberId: memberId,
            matchId: matchId,
        });

        await this.playRepository.delete(play);
    }


    /*async updatePlay(memberId: string, matchId: number, playData: Partial<Play>): Promise<Play> {
        const play = await this.playRepository.findOne({
            where: {
                memberId: memberId,
                matchId: matchId,
            },
        });
        if (!play) {
            throw new NotFoundException(`Play with member ID ${memberId} and match ID ${matchId} not found`);
        }
        Object.assign(play, playData);
        await this.playRepository.save(play);
        return play;
    }*/

    async updatePlay(memberId: string, matchId: number, playData: Partial<Play>): Promise<Play> {
        await this.playRepository.createQueryBuilder()
            .update(PlayEntity)
            .set(playData)
            .where("memberId = :memberId", {memberId})
            .andWhere("matchId = :matchId", {matchId})
            .execute();

        return this.playRepository.findOne({
            where: {
                memberId: memberId,
                matchId: matchId,
            },
        });
    }
}  