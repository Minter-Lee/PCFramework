import reducerLoadTmp from '../../../redux/reducerLoadTmp';
//constants
const SAVE_DINNER_RULE = 'SAVE_DINNER_RULE',
      SAVE_DINNER_RULE_SUCCESS = 'SAVE_DINNER_RULE_SUCCESS',
      SAVE_DINNER_RULE_ERROR = 'SAVE_DINNER_RULE_ERROR',
      types = [SAVE_DINNER_RULE,SAVE_DINNER_RULE_SUCCESS,SAVE_DINNER_RULE_ERROR];

//actions
export function saveDinnerRule () {
    return {
        url: './api/getDinnerRules.json',
        types: types
    }
}

//reducers
const DinnerRuleAdd = (state, action) => {
    return reducerLoadTmp(state, action.type, types);
}

export default DinnerRuleAdd;