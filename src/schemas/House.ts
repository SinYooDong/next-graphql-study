import { Field, Int, ObjectType } from "type-graphql"
import { prop, Typegoose, Ref } from "@typegoose/typegoose";

@ObjectType()
export default class House extends Typegoose {
    @Field(type => String)
    readonly _id: string;

    @Field(type => String)
    @prop()
    readonly id: string;

    @Field()
    @prop()
    name: string

}