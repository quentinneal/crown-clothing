import { MenuActionTypes } from './menu.types';

const INITIAL_STATE = {
  menuHidden: true
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MenuActionTypes.TOGGLE_MENU_HIDDEN:
      return {
        ...state,
        menuHidden: true
      };
    case MenuActionTypes.TOGGLE_MENU_SHOW:
      return {
        ...state,
        menuHidden: false
      };
    default:
      return state;
  }
};

export default menuReducer;