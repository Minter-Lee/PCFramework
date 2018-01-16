import HomeReducers from '../views/HomeRedux';
import SiderReducers from '../views/Sider/IndexPageRedux';
import DinnerManagementReducers from '../views/DinnerManagement/IndexPageRedux';
import { combineReducers }  from 'redux';

export default {
    home: HomeReducers,
    sider: SiderReducers,
    dinner: DinnerManagementReducers
}