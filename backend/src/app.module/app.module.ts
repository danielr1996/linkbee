import { Module } from '@nestjs/common';
import { DashboardEntryModule } from 'src/dashboardentry.module/dashboardentry.module';
import { KubernetesModule } from 'src/kubernetes.module/kubernetes.module';
import { AppController } from './app.controller';
@Module({
  imports: [KubernetesModule, DashboardEntryModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
