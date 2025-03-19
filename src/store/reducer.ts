import { RootState, Center } from '../libs/types';
import {
  FETCH_CENTERS_REQUEST,
  FETCH_CENTERS_SUCCESS,
  FETCH_CENTERS_FAILURE,
  SET_SELECTED_CENTER,
  CenterActions,
} from './actions';

const initialState: RootState = {
  centers: {
    data: [],
    loading: false,
    error: null,
  },
  selectedCenter: null,
};

const rootReducer = (state = initialState, action: CenterActions): RootState => {
  switch (action.type) {
    case FETCH_CENTERS_REQUEST:
      return {
        ...state,
        centers: {
          ...state.centers,
          loading: true,
          error: null,
        },
      };
    case FETCH_CENTERS_SUCCESS:
      return {
        ...state,
        centers: {
          data: action.payload,
          loading: false,
          error: null,
        },
      };
    case FETCH_CENTERS_FAILURE:
      return {
        ...state,
        centers: {
          ...state.centers,
          loading: false,
          error: action.payload,
        },
      };
    case SET_SELECTED_CENTER:
      return {
        ...state,
        selectedCenter: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;