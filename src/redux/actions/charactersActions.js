import axios from "axios";
import {
  FETCH_CHARACTERS_PENDING,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
} from "../types/charactersTypes";

export const fetchCharacters = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCharactersPending());
      const res = await axios.get(
        "https://rickandmortyapi.com/api/character/1,10"
      );
      if (res.error) {
        throw res.error;
      }
      dispatch(fetchCharactersSuccess(res));
    } catch (error) {
      dispatch(fetchCharactersError(error));
    }
  };
};

export const fetchCharactersPending = () => {
  return {
    type: FETCH_CHARACTERS_PENDING,
  };
};

export const fetchCharactersSuccess = (characters) => {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    characters,
  };
};

export const fetchCharactersError = (error) => {
  return {
    type: FETCH_CHARACTERS_ERROR,
    error,
  };
};
