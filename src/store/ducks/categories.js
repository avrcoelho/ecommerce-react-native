import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  // passa o nome das actions
  setCategoryRequest: null,
  setCategorySuccess: ['data'],
  setActualCategory: ['id'],
});

export const CategoryTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  categories: [],
  activeCategory: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CATEGORY_SUCCESS]: (state, action) => state.merge({ categories: action.data, activeCategory: action.data[0].id }),
  [Types.SET_ACTUAL_CATEGORY]: (state, action) => state.merge({ categories: [...state.categories], activeCategory: action.id }),
});
