import { Injectable } from '@nestjs/common';

@Injectable()
export class HouseService {
    house = [];
    constructor() {
        this.house = [{
            id: 1,
            name: "사무실"
        }, {
            id: 2,
            name: "집"
        }]
    }

    findAll = () => {
        return this.house;
    }

    findById = (id: number) => {
        return this.house.find(c => c.id === id);
    }

    // createCat = async (name: string, age: number) => {
    //     let newCat = {
    //         id: this.cats.length + 1, name: name, age: age
    //     };
    //     await this.cats.push(newCat);
    //     return newCat;
    // }
}
