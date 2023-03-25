import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class DashboardEntry {
    @Field() id: string
    @Field() name: string
    @Field() url: string    
}