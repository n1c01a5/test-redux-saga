import { call, put, takeLatest } from 'redux-saga/effects'

import { REQUEST_API_DATA, receiveApiData } from './actions'
import { fetchData } from './api'
import { REQUEST_BALANCE, receiveBalance } from './actions'
import { fetchProfile } from './profile'

function* getApiData(action) {
   try {
      const balance = yield call(fetchData);
      console.log(balance)
      yield put(receiveApiData(balance))
   } catch (e) {
      console.log(e)
   }
}

function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

export default mySaga;
