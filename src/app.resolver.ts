import { Args, Mutation, Query, Resolver, ResolveProperty, Parent, Subscription } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';
import Cat from "./schemas/Cat";
import House from "./schemas/House";
import Comment from "./schemas/Comment";
import { Int } from 'type-graphql';
import { CatService } from './cat/cat.service';
import { HouseService } from './house/house.service';
import { PubSub } from 'graphql-subscriptions';
const pubSub = new PubSub();

@Resolver(of => Cat)
export class AppResolver {

    constructor(private readonly catsService : CatService,private readonly houseService : HouseService){}

    @Query(returns => [Cat], { nullable: true })
    getCats() {
        console.log("getCats");
        return this.catsService.findAll();
    }


    @Query(returns => Cat, { nullable: true })
    async findOneById(
        @Args('id')
        id: string
    ): Promise<any> {
        return this.catsService.findById(id);
    }
    @Mutation(returns => Cat)
    async creatCat(@Args({ name: 'name', type: () => String }) name: string, @Args({ name: 'age', type: () => Int,defaultValue:10 }) agr: number) {
        let newCat:any = await this.catsService.createCat(name, agr);
        await this.houseService.createHouse(newCat._id,`${newCat.name}의 집`);
        pubSub.publish('commentAdded', {id:newCat.id,content:newCat.name});
        return newCat
    }

    @ResolveProperty('house',()=>[House])
    async getHouse(@Parent() cat) {
        const { _id } = cat;
        return await this.houseService.findAll(_id);
    }

    @Subscription(returns => Comment, {
        resolve: value => value,
    })
    commentAdded() {
        return pubSub.asyncIterator('commentAdded');
    }
}