import { combineReducers } from 'redux';

import tableReducer from './TableRedux';

/*--Reducers--*/
export default combineReducers({
    tableData: tableReducer
});

/*--Action--*/
export * as tableActions from './TableRedux';
