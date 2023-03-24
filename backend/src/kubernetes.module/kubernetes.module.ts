import { Module } from '@nestjs/common';
import { KubernetesService } from './kubernetes.service';
import {CqrsModule} from '@nestjs/cqrs'

@Module({
  imports: [CqrsModule],
  providers: [KubernetesService],
})
export class KubernetesModule {}
