import { combineReducers } from 'redux';

import tableReducer from '../components/Home/TableRedux';

/*--Reducers--*/
export default combineReducers({
    tableData: tableReducer
});

/*--Action--*/
export * as tableActions from '../components/Home/TableRedux';
