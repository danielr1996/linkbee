import { FunctionComponent } from 'react';
import { DashboardEntries, DashboardEntry, useDashboardEntries } from './dashboard.module/api/api';
import { ApolloQueryComponent } from './lib/ApolloQueryComponent';

export const App = () => {
  return <>
    {<Dashboard></Dashboard>}
  </>
}

const DashboardEntryCard: FunctionComponent<DashboardEntry> = ({ id, url, name, icon: { external, location }})=>{
  const imgSrc = external ? location : url+location
  return <li key={id}>
    <img height="64px" width="64px" alt={`favicon for ${name}`} src={imgSrc} />
    <a href={url}>{name}</a>
  </li>
}

const Dashboard = () => {
  const queryResult = useDashboardEntries()
  return <ApolloQueryComponent<DashboardEntries> result={queryResult} >
    {({ dashboardEntry }) => <>
      <h1>Linkbee</h1>
      <ul>
        {dashboardEntry.map(entry => <DashboardEntryCard key={entry.id} {...entry}/>)}
      </ul>
    </>}
  </ApolloQueryComponent>
}