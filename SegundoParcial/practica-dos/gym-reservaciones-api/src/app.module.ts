import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { InstructorModule } from './instructor/instructor.module';
import { ClaseModule } from './clase/clase.module';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'gym.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    InstructorModule,
    ClaseModule,
    ClienteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
