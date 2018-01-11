import {Router, Route} from 'react-router-dom';
import Home from '../views/Home';

const routes = () => (
	<div>
        <Route exact path='/'component={Home} />
    </div>
);

export default routes;
