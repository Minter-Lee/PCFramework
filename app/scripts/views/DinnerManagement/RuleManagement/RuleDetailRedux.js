import reducerLoadTmp from '../../../redux/reducerLoadTmp';
//constants
const LOAD_DINNER_RULE_DATA = 'LOAD_DINNER_RULE_DATA',
      LOAD_DINNER_RULE_DATA_SUCCESS = 'LOAD_DINNER_RULE_DATA_SUCCESS',
      LOAD_DINNER_RULE_DATA_ERROR = 'LOAD_DINNER_RULE_DATA_ERROR',
      types = [
        LOAD_DINNER_RULE_DATA,
        LOAD_DINNER_RULE_DATA_SUCCESS,
        LOAD_DINNER_RULE_DATA_ERROR
      ]

//actions
export function saveDinnerRule () {
    return {
        url: './api/getDinnerRule.json',
        types: types
    }
}

//reducers
const DinnerRuleDetail = (state, action) => {
    return reducerLoadTmp(state, action.type, types);
}

export default DinnerRuleDetail;

      