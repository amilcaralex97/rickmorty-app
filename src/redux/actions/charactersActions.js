import axios from "axios";
import {
  FETCH_CHARACTERS_PENDING,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
  FILTER_BY_VALUE,
} from "../types/charactersTypes";

export const fetchCharactersPending = () => {
  return {
    type: FETCH_CHARACTERS_PENDING,
  };
};

export const fetchCharactersSuccess = (characters) => {
  return {
    type: FETCH_CHARACTERS_SUCCESS,
    payload: characters,
  };
};

export const fetchCharactersError = (error) => {
  return {
    type: FETCH_CHARACTERS_ERROR,
    payload: error,
  };
};

export const filterCharacters = (value) => {
  return {
    type: FILTER_BY_VALUE,
    payload: value,
  };
};

export const fetchCharacters = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCharactersPending());
      const res = await axios.get(
        "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10"
      );
      const characters = res.data;
      dispatch(fetchCharactersSuccess(characters));
    } catch (error) {
      dispatch(fetchCharactersError(error));
    }
  };
};
