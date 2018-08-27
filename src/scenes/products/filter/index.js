import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { Grid, TextPrimary, TextSecondary, Button } from '../../../components/includes';
import { ArrowLeftIcon, ArrowRightIcon } from '../../../components/icons';
import Theme from '../../../theme';

const Container = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

const LeftColum = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-direction: row;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: column;
    order: 2;
  }
`;

const RightColum = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    order: 1;
  }
`;

const Pages = styled.div`

`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: ${(props) => props.theme.spacing.unit}px;
  padding-top: ${(props) => props.theme.spacing.unit}px;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    > * {
      &:not(:last-child){
        margin-right: ${(props) => props.theme.spacing.unit * 2}px;
      }
    }
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding-left: 10px;
    border-left: 1px solid ${(props) => props.theme.palette.grey.main};
    padding-left: ${(props) => props.theme.spacing.unit * 2}px;
    margin-left: ${(props) => props.theme.spacing.unit * 2}px;
  }


  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-top: ${(props) => props.theme.spacing.unit * 2}px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-wrap: wrap;
    .Typography__Secondary {
      width: 100%;
      text-align: center;
      justify-content: center;
      margin-right: 0;
      margin-bottom: ${(props) => props.theme.spacing.unit}px;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    > * {
      width: 100%;
      margin-bottom: ${(props) => props.theme.spacing.unit}px;
    }
  }
`;

class Filter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      order: 'desc',
      orderBy: 'cost'
    };
  }

  componentDidMount(){
    this.props.setFilter(this.state);
  }

  componentWillReceiveProps(next_props){
    this.setState({
      order: next_props.ProductsFilter.order,
      orderBy: next_props.ProductsFilter.orderBy
    });
  }

  /*
  ** @Event
  ** @Description: Change Filter
  */

  handleOrder = (order, orderBy) => {
    this.props.setFilter({
      order: order,
      orderBy: orderBy
    });
  }

  render() {

    const { total, page, size, actions } = this.props;
    const { order, orderBy } = this.state;

    console.log(order, orderBy);

    return (
      <ThemeProvider theme={ Theme }>
        <Grid type="container">
          <Grid type="row">
            <Container>
              <LeftColum>
                <Pages>
                  <TextPrimary size="lg">{ size * page } of { total } products</TextPrimary>
                </Pages>
                { actions && (
                  <Actions>
                    <TextSecondary size="lg">Short by:</TextSecondary>
                    <Button
                        variant={ orderBy === 'resent' && order === 'desc' ? undefined : 'secondary' }
                        onClick={ () => { this.handleOrder('desc', 'resent') } }>
                        Most resent
                    </Button>
                    <Button
                        variant={ orderBy === 'cost' && order === 'asc' ? undefined : 'secondary' }
                        onClick={ () => { this.handleOrder('asc', 'cost') } }>
                        Lowest price
                    </Button>
                    <Button
                        variant={ orderBy === 'cost' && order === 'desc' ? undefined : 'secondary' }
                        onClick={ () => { this.handleOrder('desc', 'cost') } }>
                        Highest price
                    </Button>
                  </Actions>
                )}
              </LeftColum>
              <RightColum>
                { page > 1 && (
                  <Button variant="icon" onClick={ this.props.onPrevPage }>
                    <img src={ ArrowLeftIcon } alt="Prev"/>
                  </Button>
                )}
                { page < Math.ceil( total / size ) && (
                  <Button variant="icon" onClick={ this.props.onNextPage }>
                    <img src={ ArrowRightIcon } alt="Next"/>
                  </Button>
                )}
              </RightColum>
            </Container>
          </Grid>
        </Grid>
      </ThemeProvider>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    ProductsList: state.ProductsList,
    ProductsFilter: state.ProductsFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (data) => {
      dispatch({
        type: 'PRODUCTS_FILTER',
        data: data
      });
    }
  }
}

Filter.propTypes = {
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
