import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Component = styled.div`
  max-width: 1140px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Container = ({ children, ...rest}) => {
  return (
    <Component className="Default__Container">
      { children }
    </Component>
  )
}

Component.propTypes = {
  children: PropTypes.node
};

export default Container;
