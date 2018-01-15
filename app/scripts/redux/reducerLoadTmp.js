const initialState = {
    loading: true,
    error: false,
    payload: {}
}

export default (state = initialState, type, actionTypes) => {
     switch (type) {
        case actionTypes[0]: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case actionTypes[1]: {
            return {
                ...state,
                loading: false,
                error: false,
                payload: action.payload
            }
        }

        case actionTypes[2]: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }

        default: {
            return state;
        }
    }
}