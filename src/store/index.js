import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const User = (state = {}, action) => {

  let newState = Object.assign({}, state);

  switch(action.type){
    case 'USER_SET':
      newState = action.data;
      return newState;
    case 'USER_REEDEN_NOW':
      newState.points = newState.points - action.data.cost;
      newState.redeemHistory.push(action.data);
      return newState;
    case 'USER_CLEAR':
      newState = {};
      return newState;
    default:
      return state;
  }

}

const ProductsList = (state = [], action) => {

  let newState = Object.assign({}, state);

  switch(action.type){
    case 'PRODUCTS_LIST':
      newState = state.concat(action.data);
      return newState;
    case 'PRODUCTS_LIST_CLEAR':
      newState = [];
      return newState;
    default:
      return state;
  }

}

const ProductsFilter = (state = {}, action) => {

  let newState = Object.assign({}, state);

  switch(action.type){
    case 'PRODUCTS_FILTER':
      newState = action.data;
      return newState;
    case 'PRODUCTS_FILTER_CLEAR':
      newState = {};
      return newState;
    default:
      return state;
  }

}

const reducers = combineReducers({
  User: User,
  ProductsList: ProductsList,
  ProductsFilter: ProductsFilter
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;
