require('dotenv').config();
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { AppResolver } from './app.resolver';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CatService } from './cat/cat.service';
import { HouseService } from './house/house.service';
import { TypegooseModule } from "nestjs-typegoose";
import Cat from "./schemas/Cat";
import House from "./schemas/House";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true
    }),
    TypegooseModule.forRoot(process.env.DATABASE),
    TypegooseModule.forFeature([Cat,House]),
  ],
  providers: [AppResolver, CatService, HouseService]
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }
