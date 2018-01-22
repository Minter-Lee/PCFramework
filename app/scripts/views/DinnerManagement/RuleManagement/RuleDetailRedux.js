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

const initialState = {
    payload: {},
    loading: true,
    error: false
}
const DinnerRuleDetail = (state=initialState, action) => {

    switch(action.type) {
        case LOAD_DINNER_RULE_DATA: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case LOAD_DINNER_RULE_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                payload: action.payload
            }
        }

        case LOAD_DINNER_RULE_DATA_ERROR: {
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

export default DinnerRuleDetail;

      