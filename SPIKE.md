## Reads

https://www.apollographql.com/docs/react/migrating/apollo-client-3-migration/#using-apollo-client-without-react
https://www.apollographql.com/docs/react/get-started
https://atomizedobjects.com/blog/react/apollo-client-without-hooks/
https://www.brianperry.dev/til/2021/using-apollo-without-react/

## Instructions

npm install @apollo/client graphql

```
import {
  gql, InMemoryCache
} from '@apollo/client';
import { ApolloClient } from '@apollo/client/core';

  const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
  });
  let otherOptions = {};
  client.query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `,
    variables: { lol: 'pop' },
    ...otherOptions
  })
```

And it's working! Start the app and login (using fake data) and you'll see the request in the browser's Network tab