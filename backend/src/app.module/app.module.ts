import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DashboardEntryModule } from 'src/dashboardentry.module/dashboardentry.module';
import { KubernetesModule } from 'src/kubernetes.module/kubernetes.module';
import { StatusModule } from 'src/status.module/status.module';
@Module({
  imports: [
    KubernetesModule,
    DashboardEntryModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      subscriptions: {
        'graphql-ws': true
      },
    }),
    StatusModule,
  ],
})
export class AppModule { }
