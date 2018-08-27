import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-grid-system';

class Grid extends React.Component {
  render() {

    const { children, type, spacing, ...rest } = this.props;

    if (type === 'container') {
      return (
        <Container>{ children }</Container>
      )
    } else if (type === 'row') {
      return (
        <Row>{ children }</Row>
      )
    } else if (type === 'col') {
      return (
        <Col {...rest}>{ children }</Col>
      )
    }

  }
}

Grid.propTypes = {
  type: PropTypes.oneOf(['container', 'row', 'col']).isRequired,
  children: PropTypes.node
};

export default Grid;
