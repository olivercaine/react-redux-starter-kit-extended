## Reads

https://www.apollographql.com/docs/react/migrating/apollo-client-3-migration/#using-apollo-client-without-react
https://www.apollographql.com/docs/react/get-started
https://atomizedobjects.com/blog/react/apollo-client-without-hooks/
https://www.brianperry.dev/til/2021/using-apollo-without-react/

## Instructions

### JS Client

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

### Downloading schema

1. npm install --save-dev @apollo/rover

2. In package.json > scripts:

```
"api:schema-download": "rover graph introspect http://localhost:3001/graphql > schema.graphql",
```

3. Download the schema

```
npm run api:schema-download
```
