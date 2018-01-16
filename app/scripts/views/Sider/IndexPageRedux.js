import { combineReducers } from 'redux';

import menuReducer from './MenuRedux';

/*--Reducers--*/
export default combineReducers({
    menuData: menuReducer
});

/*--Action--*/
export * as menuActions from './MenuRedux';
