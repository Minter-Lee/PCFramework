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
const initialState = {
    payload: {},
    loading: true,
    error: false
}
const DinnerRuleUpdate = (state=initialState, action) => {
    switch(action.type) {
        case UPDATE_DINNER_RULE: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case UPDATE_DINNER_RULE_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                payload: action.payload
            }
        }

        case UPDATE_DINNER_RULE_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }

        default: 
            return state;
    }
}

export default DinnerRuleUpdate;
