import { Field, Int, ObjectType } from "type-graphql"
import House from "./House"

@ObjectType()
export default class Cat {
    @Field(type => Int)
    id: number;

    @Field()
    name: string

    @Field(type => Int)
    age: number

    @Field(type=> [House])
    house: House[]
}