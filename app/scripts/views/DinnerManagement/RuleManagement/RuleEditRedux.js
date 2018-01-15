import reducerLoadTmp from '../../../redux/reducerLoadTmp';
// constants
const UPDATE_DINNER_RULE = 'UPDATE_DINNER_RULE',
      UPDATE_DINNER_RULE_SUCCESS = 'UPDATE_DINNER_RULE_SUCCESS',
      UPDATE_DINNER_RULE_ERROR = 'UPDATE_DINNER_RULE_ERROR',
      types = [
          UPDATE_DINNER_RULE,
          UPDATE_DINNER_RULE_SUCCESS,
          UPDATE_DINNER_RULE_ERROR
      ]

//actions
export function updateDinnerRule() {
    return {
        url: './api/getDinnerRules.json',
        types: types
    }
}

//reducers
const DinnerRuleUpdate = (state, action) => {
    return reducerLoadTmp(state, action.type, types)
}

export default DinnerRuleUpdate;
