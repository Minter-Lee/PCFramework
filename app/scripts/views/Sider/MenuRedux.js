// constant
const LOAD_MENU_DATA = 'LOAD_MENU_DATA',
      LOAD_MENU_DATA_SUCCESS = 'LOAD_MENU_DATA_SUCCESS',
      LOAD_MENU_DATA_ERROR = 'LOAD_MENU_DATA_ERROR',
      types = [LOAD_MENU_DATA,LOAD_MENU_DATA_SUCCESS,LOAD_MENU_DATA_ERROR];

//action
export function getMenuData() {
    return {
        types: types,
        url: '/api/getMenuData.json'
    }
}

//reducer
const initialState = {
    payload: {},
    loading: true,
    error: false
}

const menuReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOAD_MENU_DATA: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case LOAD_MENU_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                payload: action.payload
            }
        }

        case LOAD_MENU_DATA_ERROR: {
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

export default menuReducer;