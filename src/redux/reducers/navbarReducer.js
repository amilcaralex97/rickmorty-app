import { NAVBAR_CHANGE } from "../types/navbarTypes";

const initialState = {
  displayMobileNavbar: false,
};

const navbarReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case NAVBAR_CHANGE:
      return {
        ...state,
        displayMobileNavbar: !state.displayMobileNavbar,
      };
    default:
      return state;
  }
};

export default navbarReducer;
