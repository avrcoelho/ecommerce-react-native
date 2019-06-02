import { call, put } from 'redux-saga/effects';

import api from '~/services/api';
import CategoryActions from '~/store/ducks/categories';
import ProductActions from '~/store/ducks/products';

export function* getCategories() {
  const { data } = yield call(api.get, 'categories');

  yield put(CategoryActions.setCategorySuccess(data));
  yield put(ProductActions.setProductRequest(data[0].id));
}
