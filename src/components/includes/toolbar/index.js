import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '../../../components/includes';

const Container = styled.div`
  margin-bottom: 40px;
`;

const Component = styled.div`
  padding-top: 15px;
  padding-bottom: 25px;
  border-bottom: 1px solid #d9d9d9;
`;

const Toolbar = ({ children, ...rest}) => {
  return(
    <Container className="Default__Toolbar">
      <Grid type="container">
        <Component>
          { children }
        </Component>
      </Grid>
    </Container>
  )
}

Toolbar.propTypes = {
  children: PropTypes.node
};

export default Toolbar;
