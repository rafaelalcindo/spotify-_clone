import React from 'react';
import './config/reactotron'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'



import GlobalStyle from './styles/global';

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Header from './components/Header'

import Routes from './routes'
import store from './store'

import { Wrapper, Container, Content } from './styles/components'


const App = () => (
  <Provider store={store} >
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>

);

export default App;
