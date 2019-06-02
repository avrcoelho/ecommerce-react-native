import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  // passa o nome das actions
  addCart: ['product'],
  removeCart: ['id'],
  changeAmount: ['amount', 'id'],
});

export const CartTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  itemsCart: [],
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_CART]: (state, action) => {
    const itemFind = state.itemsCart.find(item => item.id === action.product.id);

    if (!itemFind) {
      return state.merge({ itemsCart: [...state.itemsCart, { ...action.product, amount: 1 }] });
    }
  },
  [Types.REMOVE_CART]: (state, action) => state.merge({ itemsCart: state.itemsCart.filter(item => item.id !== action.id) }),
  [Types.CHANGE_AMOUNT]: (state, action) => state.merge({
    itemsCart: state.itemsCart.map(
      item => item.id === action.id && { ...item, amount: action.amount },
    ),
  }),
});
