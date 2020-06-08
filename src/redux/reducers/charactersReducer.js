import {
  FETCH_CHARACTERS_PENDING,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
  FILTER_BY_VALUE,
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
        characters: [],
        error: action.payload,
      };
    case FILTER_BY_VALUE:
      let newState = Object.assign({}, state);

      let value = action.payload.value;
      let filteredValues = state.characters.filter((character) => {
        return character.name.toLowerCase().includes(value);
      });

      let appliedFilters = state.appliedFilters;
      return {
        ...state,
        characters: filteredValues,
      };
    default:
      return state;
  }
};

export default charactersReducer;
