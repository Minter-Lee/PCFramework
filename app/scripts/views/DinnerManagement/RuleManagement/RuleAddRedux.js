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
const initialState = {
    payload: {},
    loading: true,
    error: false
}
const DinnerRuleAdd = (state=initialState, action) => {
    switch(action.type) {
        case SAVE_DINNER_RULE: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case SAVE_DINNER_RULE_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                payload: action.payload
            }
        }

        case SAVE_DINNER_RULE_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                payload: action.payload
            }
        }

        default: 
            return state;
    }
}

export default DinnerRuleAdd;