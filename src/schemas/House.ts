import { Field, Int, ObjectType } from "type-graphql"

@ObjectType()
export default class House {
    @Field(type => Int)
    id: number;

    @Field()
    name: string

}