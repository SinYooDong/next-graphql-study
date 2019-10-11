import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from "@typegoose/typegoose";
import Cat from "../schemas/Cat"
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class CatService {
    constructor(@InjectModel(Cat) private readonly catModel: ReturnModelType<typeof Cat>) {
    }

    findAll = async() => {
        return await this.catModel.find();
    }

    findById = async (id: string) => {
        return await this.catModel.findOne({_id:id})
    }

    createCat = async (name: string, age: number) => {
        let newCat = new this.catModel({
            name: name, age: age
        });
        return await newCat.save();
    }
}
