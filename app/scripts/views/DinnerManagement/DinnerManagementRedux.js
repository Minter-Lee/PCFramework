import { combineReducers } from 'redux';
import RuleListReducer from './RuleManagement/IndexPageRedux';
import RuleEditReducer from './RuleManagement/RuleEditRedux';
import RuleAddReducer from './RuleManagement/RuleAddRedux';
import RuleDetailReducer from './RuleManagement/RuleDetailRedux';

export default combineReducers ({
    ruleListData: RuleListReducer,
    ruleEditData: RuleEditReducer,
    ruleAddData: RuleAddReducer,
    ruleDetailData: RuleDetailReducer
});

export * as RuleListActions from './RuleManagement/IndexPageRedux';
export * as RuleEditActions from './RuleManagement/RuleEditRedux';
export * as RuleAddActions from './RuleManagement/RuleAddRedux';
export * as RuleDetailActions from './RuleManagement/RuleDetailRedux';
