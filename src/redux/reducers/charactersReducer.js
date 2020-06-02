import {
  FETCH_CHARACTERS_PENDING,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
} from "../types/charactersTypes";

const initialState = {
  characters: [],
  error: "",
  pending: false,
};

const charactersReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        error: "",
        pending: false,
        characters: action.payload,
      };
    case FETCH_CHARACTERS_ERROR:
      return {
        pending: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default charactersReducer;
