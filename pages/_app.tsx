import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }: AppProps) {
 
  return <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
}

export default MyApp
