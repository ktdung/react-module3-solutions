import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Home from './Home';
import About from './About';
import GlobalStyles from './GlobalStyles';
import ItemDetails from './ItemDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/items/:itemId'>
              <ItemDetails />
            </Route>
          </Switch>
        </Main>
      </Wrapper>

      <GlobalStyles />
    </BrowserRouter>
  );
};

const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
`;

const Main = styled.main`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export default App;
