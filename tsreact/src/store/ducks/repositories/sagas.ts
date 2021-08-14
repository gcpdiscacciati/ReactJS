/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';
import { Repository } from './types';

export function* load() {
  try {
    const response: Repository[] = yield call(api.get, 'users/diego3g/repos');
    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}
