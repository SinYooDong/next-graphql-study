import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import { AppResolver } from './app.resolver';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CatService } from './cat/cat.service';
import { HouseService } from './house/house.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true
    })
  ],
  providers: [AppResolver, CatService, HouseService]
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule { }
