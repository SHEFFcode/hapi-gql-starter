import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import MainPage from './containers/MainPage'
import 'tachyons'
import './App.css'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App
