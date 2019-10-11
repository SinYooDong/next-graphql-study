import { Field, Int, ObjectType } from "type-graphql";
import House from "./House";
import { prop, Typegoose, Ref } from "@typegoose/typegoose";

@ObjectType()
export default class Cat extends Typegoose {
    @Field(type => String)
    readonly _id: String;

    @Field({ nullable: true })
    @prop({ required: true })
    name?: string

    @Field(type => Int)
    @prop({ required: true })
    age: number

    @Field(type => [House])
    @prop({ ref: House })
    house: Array<Ref<House>>
}