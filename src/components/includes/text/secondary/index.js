// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
//
// const Container = styled.p`
//   font-size:16px;
//   font-weight: 300;
//   line-height: 20px;
//   color:#a3a3a3;
// `;
//
// const TextSecondary = ({ children, ...rest}) => {
//   return (
//     <Container className="Text__Secondary">{ children }</Container>
//   )
// }
//
// TextSecondary.propTypes = {
//   children: PropTypes.node
// };
//
// export default TextSecondary;

import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../../../theme';

const Typography = styled.p`
  ${(props) => props.theme};
`;

class TextSecondary extends React.Component {

  constructor(props) {
    super(props);

    this.theme = Theme.typography.caption;

    if (props.size === 'xs') {
      this.theme = Theme.typography.display1;
    }

    if (props.size === 'md') {
      this.theme = Theme.typography.display2;
    }

    if (props.size === 'lg') {
      this.theme = Theme.typography.display3;
    }

    this.theme = Object.assign(this.theme, { color: Theme.palette.text.secondary });

  }

  render() {

    const { children } = this.props;

    return (
      <ThemeProvider theme={ this.theme }>
        <Typography className="Typography__Secondary">{ children }</Typography>
      </ThemeProvider>
    )

  }

}

TextSecondary.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  children: PropTypes.node
};

export default TextSecondary;
