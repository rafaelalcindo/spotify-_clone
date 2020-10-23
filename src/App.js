import React, { Fragment } from 'react';

import GlobalStyle from './styles/global';

import Sidebar from './components/Sidebar'
import Player from './components/Player'

import { Wrapper, Container } from './styles/components'

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Container>
      <Sidebar />
    </Container>
    <Player />
  </Fragment>
);

export default App;
