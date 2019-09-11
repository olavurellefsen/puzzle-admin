import React from 'react'
import Menu from './Menu/Menu'
import Home from './Home/Home'
import { ApolloProvider } from 'react-apollo'
import makeApolloClient from './Hasura/apollo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './Routing/PrivateRoute'
import { useAuth0 } from './Auth/react-auth0-wrapper'
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 100%;
  background-color: #eeeeee;
`
const client = makeApolloClient();

function App() {
  const { loading } = useAuth0()

  return (
    <div className="App">
      {!loading && (
        <BrowserRouter>
          <ApolloProvider client={client}>
            <AppContainer>
              <Menu />
              <Switch>
                <Route path="/" exact component={Home} />
                <PrivateRoute path="/home" component={Home} />
              </Switch>
            </AppContainer>
          </ApolloProvider>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
