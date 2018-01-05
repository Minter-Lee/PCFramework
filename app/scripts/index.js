import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { store, history} from './redux/configureStore';
import Routes from './routes/index.js';


//告知该文件及其所有关联被修正时，进行热替换
if (module.hot) {
  module.hot.accept();
}

ReactDom.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
    </Provider>
), document.getElementById('container'));