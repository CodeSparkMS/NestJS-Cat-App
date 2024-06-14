import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {

    getCats():string[]{
        return ['cat1','cat2','cat3','cat4','cat5']
    }
}
