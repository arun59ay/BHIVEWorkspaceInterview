import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_CENTERS_REQUEST, fetchCentersSuccess, fetchCentersFailure } from './actions';
import { Center } from '../libs/types';


const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/data.json';
const GITHUB_STATIC_ASSETS = 'https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/';

function* fetchCentersSaga() {
  try {
    const response: Response = yield call(fetch, GITHUB_RAW_URL);
    const data: Center[] = yield response.json();
    
    // Transform the image URLs to use the GitHub static assets URL
    const transformedData = data.map(center => ({
      ...center,
      images: center.images.map(image => `${GITHUB_STATIC_ASSETS}${image}`)
    }));
    
    yield put(fetchCentersSuccess(transformedData));
  } catch (error) {
    yield put(fetchCentersFailure(error instanceof Error ? error.message : 'An error occurred'));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_CENTERS_REQUEST, fetchCentersSaga);
}