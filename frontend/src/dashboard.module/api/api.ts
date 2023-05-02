import { useQuery,gql, QueryResult } from '@apollo/client';
import { useEffect } from 'react';

export type DashboardEntry = {
    id: string,
    title: string,
    description: string,
    url: string,
    icon: {
        location: string,
        external: boolean,
    }
}
export type DashboardEntries = {dashboardEntry: DashboardEntry[]}

export const useDashboardEntries = (): QueryResult<DashboardEntries> => {
    const fragment = `dashboardEntry{
      id
      title
      description
      url
      icon {
        location
        external
      }
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