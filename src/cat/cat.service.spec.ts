import { Test, TestingModule } from '@nestjs/testing';
import { CatService } from './cat.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypegooseModule } from 'nestjs-typegoose';
import Cat from '../schemas/Cat';
import House from '../schemas/House';
import { AppResolver } from '../app.resolver';
import { HouseService } from '../house/house.service';

describe('CatService', () => {
  let service: CatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        GraphQLModule.forRoot({
          autoSchemaFile: 'schema.gql',
          installSubscriptionHandlers: true
        }),
        TypegooseModule.forRoot('mongodb+srv://api_user:apiuser@test-igew5.mongodb.net/test?retryWrites=true&w=majority'),
        TypegooseModule.forFeature([Cat, House]),
      ],
      providers: [AppResolver, CatService, HouseService]
      // controllers: [AppController],
      // providers: [AppService],
    }).compile();

    service = module.get<CatService>(CatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('find all test', async () => {
    let result = {};
    jest.spyOn(service, 'findAll').mockImplementation(async() => result)
    expect(await service.findAll()).toBe(result);
  })
});
