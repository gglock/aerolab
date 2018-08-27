import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../../../theme';

const Typography = styled.p`
  ${(props) => props.theme};
`;

class TextPrimary extends React.Component {

  constructor(props) {
    super(props);

    this.theme = Theme.typography.body;

    if (props.size === 'xs') {
      this.theme = Theme.typography.display1;
    }

    if (props.size === 'md') {
      this.theme = Theme.typography.display2;
    }

    if (props.size === 'lg') {
      this.theme = Theme.typography.display3;
    }

  }

  render() {

    const { children } = this.props;

    return (
      <ThemeProvider theme={ this.theme }>
        <Typography className="Text__Primary">{ children }</Typography>
      </ThemeProvider>
    )

  }

}

TextPrimary.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  children: PropTypes.node
};

export default TextPrimary;
