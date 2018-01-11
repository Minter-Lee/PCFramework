import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

import createFetchMiddleware from 'redux-composable-fetch';
import {createBrowserHistory} from 'history';

// 向中间件中追加处理json的内容，否则payload内容未转换
const FetchMiddleware = createFetchMiddleware({
    afterFetch({action, result}) {
        return result.json().then(data => {
            return Promise.resolve({
                action,
                result: data
            })
        })
    }
});

const history = createBrowserHistory();

const store = createStore(
    combineReducers(Object.assign({},rootReducer,{
        routing: routerReducer
    })),
    applyMiddleware(
        ThunkMiddleware,
        FetchMiddleware,
        routerMiddleware(history)
    )
);

export {history};

export {store};

