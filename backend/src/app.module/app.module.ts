import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { DashboardEntryModule } from 'src/dashboardentry.module/dashboardentry.module';
import { KubernetesModule } from 'src/kubernetes.module/kubernetes.module';
import { AppController } from './app.controller';
@Module({
  imports: [
    KubernetesModule,
    DashboardEntryModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      // installSubscriptionHandlers: true,
      subscriptions: {
        'graphql-ws': true
      },
    }),
  ],
  controllers: [AppController],
  providers: [
   
  ],
})
export class AppModule { }
