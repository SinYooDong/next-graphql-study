import { Field, Int, ObjectType } from "type-graphql"

@ObjectType()
export default class Comment {
    @Field(type => Int)
    id: number;

    @Field()
    content: string

}