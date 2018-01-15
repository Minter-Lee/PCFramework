import HomeReducers from '../views/HomeRedux';
import MainLayoutReducers from '../layout/MainLayoutRedux';
import { combineReducers }  from 'redux';

export default {
    home: HomeReducers,
    layout: MainLayoutReducers
};