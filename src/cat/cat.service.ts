import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    cats = [];
    constructor() {
        this.cats = [{
            id: 1,
            name: 'Mjau',
            age: 17
        },
        {
            id: 2,
            name: '미용',
            age: 12
        },
        {
            id: 3,
            name: '미뇽',
            age: 11
        }]
    }

    findAll = () => {
        return this.cats;
    }

    findById = (id: number) => {
        return this.cats.find(c => c.id === id);
    }

    createCat = async (name: string, age: number) => {
        let newCat = {
            id: this.cats.length + 1, name: name, age: age
        };
        await this.cats.push(newCat);
        return newCat;
    }
}
