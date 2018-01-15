import reducerLoadTmp from '../../../redux/reducerLoadTmp';

//constants
const LOAD_DINNER_RULE_LIST = 'LOAD_DINNER_RULE_LIST',
      LOAD_DINNER_RULE_LIST_SUCCESS = 'LOAD_DINNER_RULE_LIST_SUCCESS',
      LOAD_DINNER_RULE_LIST_ERROR = 'LOAD_DINNER_RULE_LIST_ERROR',
      types = [
          LOAD_DINNER_RULE_LIST, 
          LOAD_DINNER_RULE_LIST_SUCCESS,
          LOAD_DINNER_RULE_LIST_ERROR
      ];

//actions
export function loadDinnerRules() {
    return {
        url: './api/getDinnerRules.json',
        types: types
    }
}

//reducers
const DinnerRuleList = (state, action) => {
    return reducerLoadTmp(state, action.type, types)
}

export default DinnerRuleList;