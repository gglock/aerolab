import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Grid } from '../../includes';
import Theme from '../../../theme';

const Element = styled.div`
  height: 412px;
  background-size: cover;
  background-position: right top;
  margin-bottom: ${(props) => props.theme.spacing.unit * 6}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    height: 312px;
    margin-bottom: ${(props) => props.theme.spacing.unit * 2}px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 250px;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.typography.display5.fontSize};
  color: #ffffff;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  margin-bottom: ${(props) => props.theme.spacing.unit * 6}px;

`;

const Align = styled.div`

`;

const Teaser = ({ title, source, children, ...rest}) => {
  return (
    <ThemeProvider theme={ Theme }>
      <Element className="Default__Teaser" style={{ 'backgroundImage': `url(/assets/background/${ source })` }}>
        <Align>
          <Grid type="container">
            <Grid type="row">
              <Grid type="col" sm={12}>
                <Title>{ title }</Title>
              </Grid>
            </Grid>
          </Grid>
        </Align>
      </Element>
    </ThemeProvider>
  )
}

export default Teaser;
