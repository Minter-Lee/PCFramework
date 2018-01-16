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
const initialState = {
    payload: {},
    loading: true,
    error: false
}

const DinnerRuleList = (state=initialState, action) => {
    switch(action.type) {
        case LOAD_DINNER_RULE_LIST: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case LOAD_DINNER_RULE_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                payload: action.payload
            }
        }

        case LOAD_DINNER_RULE_LIST_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }

        default: 
            return state;
    }
}

export default DinnerRuleList;