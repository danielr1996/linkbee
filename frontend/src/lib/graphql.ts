import { ApolloClient, HttpLink, InMemoryCache, split} from '@apollo/client/core';
import { createClient } from 'graphql-ws';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { getConfigValue } from './config';

const username = getConfigValue('BASIC_AUTH_USERNAME')
const password = getConfigValue('BASIC_AUTH_PASSWORD')

const token = `${username}:${password}`

const wsLink = new GraphQLWsLink(createClient({
  url: getConfigValue('WS_API')
}));

const httpLink = new HttpLink({
  uri: getConfigValue('HTTP_API'),
  headers: {
    "Authorization": `Basic ${window.btoa(token)}`
  }
})


const splitLink = split(({ query }) => {
  const definition = getMainDefinition(query);
  return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
  );
},
  wsLink,
  httpLink
);

export const graphqlClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});