import HomeReducers from '../views/Home/IndexPageRedux';
import SiderReducers from '../views/Sider/IndexPageRedux';
import DinnerManagementReducers from '../views/DinnerManagement/IndexPageRedux';
import EmployeeReducers from '../views/common/EmployeeRedux4Rule';
import { combineReducers }  from 'redux';

export default {
    home: HomeReducers,
    sider: SiderReducers,
    dinner: DinnerManagementReducers,
    employeePicker: EmployeeReducers
}