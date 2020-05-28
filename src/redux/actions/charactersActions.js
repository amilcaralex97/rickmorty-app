import {
  FETCH_CHARACTERS_PENDING,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_ERROR,
} from "../types/charactersTypes";

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
