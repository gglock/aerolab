import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../../../theme';

const Button = styled.button`
  cursor: pointer;
  display: inline-flex;
  border: 0;
  outline: none;
  position: relative;
  user-select: none;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  min-height: ${(props) => props.theme.minHeight}px;
  padding-left: ${(props) => props.theme.paddingX}px;
  padding-right: ${(props) => props.theme.paddingX}px;
  padding-top: ${(props) => props.theme.paddingY}px;
  padding-bottom: ${(props) => props.theme.paddingY}px;
  font-size: ${(props) => props.theme.fontSize};
  width: ${(props) => props.theme.width};
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  border-radius: ${ (props) => props.theme.minHeight / 2 }px;
  transition: 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  &:hover {
    background: ${(props) => props.theme.hover};
  }
`;

const Component = ({ children, variant, fullWidth, ...rest}) => {

  let theme = {
    width: 'auto',
    fontSize: Theme.typography.title.fontSize,
    background: Theme.palette.primary.main,
    color: Theme.palette.primary.contrastText,
    minHeight: `${ Theme.spacing.unit * 6 }`,
    paddingX: `${ Theme.spacing.unit * 2 }`,
    paddingY: `${ Theme.spacing.unit }`,
    hover: Theme.palette.primary.light
  };

  if (variant === 'secondary') {
    theme.background = Theme.palette.secondary.main;
    theme.hover = Theme.palette.secondary.light;
    theme.color = Theme.palette.secondary.contrastText;
  }

  if (variant === 'icon') {
    theme.hover = 'none';
    theme.background = 'none';
    theme.paddingX = '0';
    theme.paddingY = '0';
  }

  if (fullWidth) {
    theme.width = '100%';
  }

  return (
    <ThemeProvider theme={ theme }>
      <Button { ...rest }>
          { children }
      </Button>
    </ThemeProvider>
  )

}

Component.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node
};

export default Component;
