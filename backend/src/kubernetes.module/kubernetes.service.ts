import { Injectable } from "@nestjs/common";
import { CommandBus} from "@nestjs/cqrs";
import * as k8s from '@kubernetes/client-node';
import { V1ListMeta, V1ObjectMeta } from '@kubernetes/client-node';
import { IncomingMessage } from 'http';
import { DeleteDashboardEntryCommand } from "../dashboardentry.module/deletedashboardentry.handler";
import { PutDashboardEntryCommand } from "src/dashboardentry.module/putdashboardentry.handler";

export declare class V1AlphaDashboardEntry {
    'apiVersion'?: string;
    'kind'?: string;
    'metadata': V1ObjectMeta;
    'spec': {
        name: string,
        url: string,
        icon: {
            location: string,
            external: boolean
        }
    };
}

export declare class V1AlphaDashboardEntryList {
    'apiVersion'?: string;
    'items': Array<V1AlphaDashboardEntry>;
    'kind'?: string;
    'metadata'?: V1ListMeta;
}

const apiGroup = 'linkbee.danielrichter.codes'
const apiVersion = 'v1alpha'
const plural = 'dashboardentries'
@Injectable()
export class KubernetesService {
    constructor(private commandBus: CommandBus) {
        const kc = new k8s.KubeConfig()
        kc.loadFromCluster()
        const k8sApi = kc.makeApiClient(k8s.CustomObjectsApi)
        type ListFn = Promise<{ body: V1AlphaDashboardEntryList, response: IncomingMessage }>
        const listfn = () => k8sApi.listClusterCustomObject(apiGroup, apiVersion, plural) as ListFn
        const informer = k8s.makeInformer(kc, `/apis/${apiGroup}/${apiVersion}/${plural}`, listfn);

        const generateId=(dbe: V1AlphaDashboardEntry)=>`${dbe.metadata.namespace}-${dbe.metadata.name}`

        informer.on('add',(dbe: V1AlphaDashboardEntry)=>this.commandBus.execute( new PutDashboardEntryCommand({id: generateId(dbe), ...dbe.spec})));
        informer.on('update', (dbe: V1AlphaDashboardEntry)=>this.commandBus.execute( new PutDashboardEntryCommand({id: generateId(dbe), ...dbe.spec})));
        informer.on('delete', (dbe: V1AlphaDashboardEntry)=>this.commandBus.execute( new DeleteDashboardEntryCommand(generateId(dbe))));
        informer.on('error', (err: any) => {
          console.error(err);
          setTimeout(() => {
            informer.start();
          }, 5000);
        });

        informer.start();
    }
}



