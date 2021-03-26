import { MenuActionTypes } from './menu.types';

export const toggleMenuHidden = () => ({
  type: MenuActionTypes.TOGGLE_MENU_HIDDEN
});

export const toggleMenuShow = () => ({
  type: MenuActionTypes.TOGGLE_MENU_SHOW
});
