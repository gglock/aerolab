import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Header } from '../../shared';
import Theme from '../../../theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: ${(props) => props.theme.palette.background.body};
  padding-top: ${(props) => props.theme.spacing.unit * 10}px;
  color: ${(props) => props.theme.palette.text.primary};
`;

const Layout = ({children, ...rest}) => {
  return (
    <ThemeProvider theme={ Theme }>
      <Container className="Default__Layout">
        <Header/>
        { children }
      </Container>
    </ThemeProvider>
  )
}

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <Layout classes= { rest.classes }>
          <Component {...matchProps} />
      </Layout>
    )} />
  )
};

DefaultLayout.propTypes = {
  children: PropTypes.node
};

export default DefaultLayout;
