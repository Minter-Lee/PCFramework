import {Router, Route} from 'react-router-dom';
import HomeView from '../views/Home';
import OtherView from '../views/OtherView';
import DetailView from '../views/DetailView';
import RuleManagemntView from '../views/DinnerManagement/RuleManagement/IndexPageView';
import RuleEditView from '../views/DinnerManagement/RuleManagement/RuleEditView';
import MainLayout from '../layout/MainLayout';

const routes = () => (
    <MainLayout>
        <Route exact path='/'component={HomeView} />
        <Route path='/home/'component={HomeView} />
        <Route path='/other/'component={OtherView} />
        <Route path='/detail/'component={DetailView} />
        <Route path='/dinner/rule'component={RuleManagemntView} />
    </MainLayout>
);

export default routes;
