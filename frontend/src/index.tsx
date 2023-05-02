import { ApolloProvider } from '@apollo/client/react';
import ReactDOM from 'react-dom/client';
import { graphqlClient } from './lib/graphql';
import {RouterProvider} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { router } from './lib/routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  // <React.StrictMode>
  <ApolloProvider client={graphqlClient}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ApolloProvider>
  // </React.StrictMode>
);
