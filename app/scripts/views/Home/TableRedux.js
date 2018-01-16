/*--Contants--*/
const LOAD_TABLE_DATA = 'LOAD_TABLE_DATA',
      LOAD_TABLE_DATA_SUCCESS = 'LOAD_TABLE_DATA_SUCCESS',
      LOAD_TABLE_DATA_ERROR = 'LOAD_TABLE_DATA_ERROR';

/*--Actions--*/
export function loadTableData() {
    return {
        url: '/api/getTableData.json',
        types: [LOAD_TABLE_DATA,LOAD_TABLE_DATA_SUCCESS,LOAD_TABLE_DATA_ERROR]
    }
}

/*--Reducer--*/
const initialState = {
    loading: true,
    error: false,
    payload:{}
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TABLE_DATA: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case LOAD_TABLE_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                payload: action.payload
            }
        }

        case LOAD_TABLE_DATA_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: '出错了'
            }
        }

        default: 
            return state;
    }
}

export default tableReducer;