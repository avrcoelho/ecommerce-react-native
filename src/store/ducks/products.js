import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  // passa o nome das actions
  setProductRequest: ['category'],
  setProductSuccess: ['data'],
});

export const ProductTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  products: [],
  category: null,
  loading: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PRODUCT_REQUEST]: (state, action) => state.merge({ category: action.category, loading: true }),
  [Types.SET_PRODUCT_SUCCESS]: (state, action) => state.merge({ products: action.data, loading: false }),
});
