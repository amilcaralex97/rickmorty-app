import {
  FETCH_CHARACTERS_PENDING,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
  FILTER_BY_VALUE,
} from "../types/charactersTypes";

const initialState = {
  characters: [],
  filteredCharacters: [],
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
        filteredCharacters: action.payload,
      };
    case FETCH_CHARACTERS_ERROR:
      return {
        pending: false,
        characters: [],
        error: action.payload,
      };
    case FILTER_BY_VALUE:
      let value = action.payload.value.toLowerCase();
      let filteredList = state.characters.filter((character) => {
        return character.name.toLowerCase().indexOf(value) > -1;
      });
      return {
        ...state,
        filteredCharacters: filteredList,
      };
    default:
      return state;
  }
};

export default charactersReducer;
