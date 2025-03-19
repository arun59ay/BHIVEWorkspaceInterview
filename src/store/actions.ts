import { Center } from '../libs/types';

export const FETCH_CENTERS_REQUEST = 'FETCH_CENTERS_REQUEST';
export const FETCH_CENTERS_SUCCESS = 'FETCH_CENTERS_SUCCESS';
export const FETCH_CENTERS_FAILURE = 'FETCH_CENTERS_FAILURE';
export const SET_SELECTED_CENTER = 'SET_SELECTED_CENTER';

export const fetchCentersRequest = () => ({
  type: FETCH_CENTERS_REQUEST as typeof FETCH_CENTERS_REQUEST,
});

export const fetchCentersSuccess = (centers: Center[]) => ({
  type: FETCH_CENTERS_SUCCESS as typeof FETCH_CENTERS_SUCCESS,
  payload: centers,
});

export const fetchCentersFailure = (error: string) => ({
  type: FETCH_CENTERS_FAILURE as typeof FETCH_CENTERS_FAILURE,
  payload: error,
});

export const setSelectedCenter = (center: Center | null) => ({
  type: SET_SELECTED_CENTER as typeof SET_SELECTED_CENTER,
  payload: center,
});

export type CenterActions = 
  | ReturnType<typeof fetchCentersRequest>
  | ReturnType<typeof fetchCentersSuccess>
  | ReturnType<typeof fetchCentersFailure>
  | ReturnType<typeof setSelectedCenter>;