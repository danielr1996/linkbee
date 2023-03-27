import { DashboardEntries, useDashboardEntries } from './dashboard.module/api/api';
import { ApolloQueryComponent } from './lib/ApolloQueryComponent';

export const App = ()=>{
  const queryResult = useDashboardEntries()
  return <ApolloQueryComponent<DashboardEntries> result={queryResult} >
    {({dashboardEntry})=><>
      <h1>Linkbee</h1>
      <ul>
        {dashboardEntry.map(({id,url,name})=><li key={id}><a href={url}>{name}</a></li>)}
      </ul>
    </>}
  </ApolloQueryComponent>
}