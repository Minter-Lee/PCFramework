import { combineReducers } from 'redux';
import RuleManagementReducer from '../components/DinnerManagement/RuleManagement/RuleRedux';

export default combineReducers ({
    ruleManagementData: RuleManagementReducer
});

export * as RuleManagementActions from '../components/DinnerManagement/RuleManagement/RuleRedux';