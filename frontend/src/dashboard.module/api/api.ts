import { useQuery,gql, QueryResult } from '@apollo/client';
import { useEffect } from 'react';

export type DashboardEntry = {
    id: string,
    name: string,
    url: string,
}
export type DashboardEntries = {dashboardEntry: DashboardEntry[]}

export const useDashboardEntries = (): QueryResult<DashboardEntries> => {
    const fragment = `dashboardEntry{
      id
      name
      url
    }`
    const QUERY = gql`query{${fragment}}`
    const SUBSCRIPTION = gql`subscription{${fragment}}`

    const queryResult = useQuery<DashboardEntries>(QUERY);
    useEffect(() => {
        queryResult.subscribeToMore({
            document: SUBSCRIPTION,
            variables: {},
            updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                return { ...prev, ...subscriptionData.data }
            }
        })
    }, [queryResult,SUBSCRIPTION])
    return queryResult
}