import React from 'react';
import { connect } from 'react-redux';
import { Teaser } from '../../../components/shared';
import { Grid, Toolbar } from '../../../components/includes';
import { ProductService } from '../../../services';
import Sorting from '../../../utilities/sort';
import Slicing from '../../../utilities/slice';
import Product from '../item';
import Filter from '../filter';

class Products extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      pageSize: 16,
      currentPage: 1
    };
  }

  componentDidMount(){
    this._FindAll();
  }

  /*
  ** @Service
  ** @Description: FindAll
  */

  _FindAll = () => {

    ProductService.get().then((response) => {

      this.props.FindAll(response);

    }).catch((error) => {

    });
  }

  /*
  ** @Event
  ** @Description: Change Page Prev
  */

  handlePrevPage = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
    window.scrollTo(0, 0);
  }

  /*
  ** @Event
  ** @Description: Change Page Next
  */

  handleNextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
    window.scrollTo(0, 0);
  }

  render() {

    const { ProductsList, ProductsFilter } = this.props;
    const { pageSize, currentPage } = this.state;

    const List = Slicing(ProductsList, pageSize, currentPage);

    return (
      <div>

        <Teaser title="Electronics" source="header-x2.png"/>

        { ProductsList.length > 0 ? (

          <div>
            <Toolbar>
              <Filter
                    actions={true}
                    page={ this.state.currentPage }
                    total={ ProductsList.length }
                    size={ this.state.pageSize }
                    onPrevPage={ this.handlePrevPage }
                    onNextPage={ this.handleNextPage }
              />
            </Toolbar>

            <Grid type="container">
              <Grid type="row">

                {
                  List.sort(Sorting(ProductsFilter.order,ProductsFilter.orderBy)).map(product => {
                    return(
                      <Grid type="col" sm={6} md={6} lg={3} xl={3} key={ product._id }>
                        <Product item={ product } />
                      </Grid>
                    )
                  })
                }

              </Grid>
            </Grid>

            <Toolbar>
              <Filter
                    page={ this.state.currentPage }
                    total={ ProductsList.length }
                    size={ this.state.pageSize }
                    onPrevPage={ this.handlePrevPage }
                    onNextPage={ this.handleNextPage }
              />
            </Toolbar>
          </div>

        ) : (
          <Grid type="container">
            <p>Cargando...</p>
          </Grid>
        )}

      </div>
    );
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
    FindAll: (data) => {
      dispatch({
        type: 'PRODUCTS_LIST',
        data: data
      });
    },
    ClearAll: () => {
      dispatch({
        type: 'PRODUCTS_LIST_CLEAR'
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
