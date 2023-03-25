import { useQuery,gql } from '@apollo/client';
import { useSubscription } from '@apollo/client/react';
import { useEffect } from 'react';

//TODO: Examine the use of Fragments
const fragment = `dashboardEntry{
  id
  name
  url
}`
const QUERY= gql`query{${fragment}}`
const SUBSCRIPTION = gql`subscription{${fragment}}`

function App() {
  const { loading, data, subscribeToMore } = useQuery(QUERY);
  useEffect(()=>{
    subscribeToMore({
      document: SUBSCRIPTION,
      variables: {},
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        return {...prev,...subscriptionData.data}
      }
    })
  },[subscribeToMore])
  if(loading) return <>Loading...</>
  return <ul>
    {data.dashboardEntry.map((entry:any)=><li key={entry.id}><a href={entry.url}>{entry.name}</a></li>)}
  </ul>
}

export default App;
