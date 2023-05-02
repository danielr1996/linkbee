import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class DashboardEntryIcon {
    @Field() location: string
    @Field() external: boolean
}

@ObjectType()
export class DashboardEntry {
    @Field() id: string
    @Field() name: string
    @Field() url: string    
    @Field() icon: DashboardEntryIcon
}