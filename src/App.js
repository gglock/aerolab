import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import DefaultLayout from './components/layouts';
import { Products } from './scenes';

const Container = styled.div`
  flex-grow: 1;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Switch>
            <DefaultLayout exact path="/" component={ Products } />
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
