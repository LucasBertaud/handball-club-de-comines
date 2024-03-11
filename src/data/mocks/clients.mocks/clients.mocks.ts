import { Injectable } from '@nestjs/common';
import { Client } from 'src/domain/models/client';

@Injectable()
export class ClientsMock {

    getAllClients() {
        return [
            new Client("aaaa", "bbbb"),
            new Client("cccc", "dddd")
        ];
    }
}
