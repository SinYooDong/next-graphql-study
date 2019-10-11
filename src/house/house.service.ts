import { Injectable } from '@nestjs/common';
import House from '../schemas/House';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class HouseService {
    constructor(@InjectModel(House) private readonly houseModel: ReturnModelType<typeof House>) {
    }

    findAll = async (_id) => {
        return await this.houseModel.find({id:_id});
    }

    findById = async (id: number) => {
        return await this.houseModel.findOne({_id:id});
    }

    createHouse = async (id:string,name: string) => {
        let newHouse = new this.houseModel({id,name});
        return await newHouse.save();
    }
}
