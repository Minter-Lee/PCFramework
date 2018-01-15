import { combineReducers } from 'redux';

import mainMenuReducer from './MainMenuRedux';

/*--Reducers--*/
export default combineReducers({
    mainMenuData: mainMenuReducer
});

/*--Action--*/
export * as mainMenuActions from './MainMenuRedux';
