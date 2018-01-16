import {Router, Route} from 'react-router-dom';

import HomeView from '../views/Home';
import OtherView from '../views/OtherView';
import DetailView from '../views/DetailView';
import RuleManagemntView from '../views/DinnerManagement/RuleManagement/IndexPageView';
import RuleEditView from '../views/DinnerManagement/RuleManagement/RuleEditView';
import SiderView from '../views/Sider/IndexPageView';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

// const routes = () => (
//     <MainLayout>
//         <Route exact path='/'component={HomeView} />
//         <Route path='/home/'component={HomeView} />
//         <Route path='/other/'component={OtherView} />
//         <Route exact path='/detail/'component={DetailView} />
//         <Route exact path='/dinner/rule'component={RuleManagemntView} />
//         <Route exact path='/dinner/rule/edit/:ruleId' component={RuleEditView} />
//     </MainLayout>
// );

const routes = () => (
    <Layout>
        <SiderView />
      <Layout>
        <Header>Header</Header>
        <Content style={{ margin: '24px 16px 0' }}>
            <Route exact path='/'component={HomeView} />
            <Route path='/home/'component={HomeView} />
            <Route path='/other/'component={OtherView} />
            <Route exact path='/detail/'component={DetailView} />
            <Route exact path='/dinner/rule'component={RuleManagemntView} />
            <Route exact path='/dinner/rule/edit/:ruleId' component={RuleEditView} />
        </Content>
        <Footer>© 2018 **********</Footer>
      </Layout>
    </Layout>
)

export default routes;
