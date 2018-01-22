//constants
const LOAD_EMPLOYEE_PICKER_DATA = 'LOAD_EMPLOYEE_PICKER_DATA',
      LOAD_EMPLOYEE_PICKER_DATA_SUCCESS = 'LOAD_EMPLOYEE_PICKER_DATA_SUCCESS',
      LOAD_EMPLOYEE_PICKER_DATA_ERROR = 'LOAD_EMPLOYEE_PICKER_DATA_ERROR';

//actions
export function loadEmployeePickerData () {
    return {
        url:'/api/getEmployeeData.json',
        types: [LOAD_EMPLOYEE_PICKER_DATA,LOAD_EMPLOYEE_PICKER_DATA_SUCCESS,LOAD_EMPLOYEE_PICKER_DATA_ERROR]
    }
}

//reducer
const initialState = {
    loading: true,
    error: false,
    payload: {}
}

const EmployeePickerReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOAD_EMPLOYEE_PICKER_DATA: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case LOAD_EMPLOYEE_PICKER_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                payload: action.payload
            }
        }

        case LOAD_EMPLOYEE_PICKER_DATA_ERROR: {
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

export default EmployeePickerReducer;