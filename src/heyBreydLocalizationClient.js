import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { getMainDefinition } from 'apollo-utilities';

// Create an http link:
const httpLink = new HttpLink({
  uri: 'https://heybreyd-localization.herokuapp.com/v1alpha1/graphql',
  headers: {
    "Content-Type": 'application/json',
    "X-Hasura-Access-Key": 'heybreyd123' 
  }, 
  credentials: 'same-origin'
})

// Create a WebSocket link:
const wsLink = new WebSocketLink(
  new SubscriptionClient('ws://heybreyd-localization.herokuapp.com/v1alpha1/graphql', {
    reconnect: true,
    timeout: 30000,
    connectionParams: {
      headers: {
        "Content-Type": 'application/json',
        "X-Hasura-Access-Key": 'heybreyd123' 
      }, 
      credentials: 'same-origin'
    }
  })
);

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: false
  })
});

export default client;