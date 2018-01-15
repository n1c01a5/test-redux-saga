import { call, put, takeLatest } from 'redux-saga/effects'

import { REQUEST_API_DATA, receiveApiData } from './actions'
import { fetchData } from './api'

function* getApiData(action) {
   try {
      const data = yield call(fetchData);
      yield put(receiveApiData(data))
   } catch (e) {
      console.log(e)
   }
}

function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

export default mySaga;
