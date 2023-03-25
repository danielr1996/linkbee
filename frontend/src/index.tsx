import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client/core';
import { ApolloProvider } from '@apollo/client/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createClient } from 'graphql-ws';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://localhost:4000/graphql',
}));
const httpLink = new HttpLink({uri: 'http://localhost:4000/graphql'})
const splitLink = split(({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  </React.StrictMode>
);
