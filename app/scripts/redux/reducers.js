import HomeReducers from '../views/HomeRedux';
import MainLayoutReducers from '../layout/MainLayoutRedux';
import DinnerManagementReducers from '../views/DinnerManagement/DinnerManagementRedux';
import { combineReducers }  from 'redux';

export default {
    home: HomeReducers,
    layout: MainLayoutReducers,
    dinner: DinnerManagementReducers
}