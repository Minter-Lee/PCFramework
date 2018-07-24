import {Router, Route} from 'react-router-dom';

import OtherView from '../views/OtherView';
import DetailView from '../views/DetailView';

import HomeView from '../views/Home/IndexPageView';
import RuleManagemntView from '../views/DinnerManagement/RuleManagement/IndexPageView';
import RuleEditView from '../views/DinnerManagement/RuleManagement/RuleEditView';
import SiderView from '../views/Sider/IndexPageView';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const routes = () => (
    <Layout>
        <SiderView />
      <Layout>
        <Header>Header</Header>
        <Content style={{ margin: '24px 16px 0', minHeight: 1000 }}>
            <Route exact path='/'component={HomeView} />
            <Route path='/home/'component={HomeView} />
            <Route path='/other/'component={OtherView} />
            <Route path='/home/detail/'component={DetailView} />
        </Content>
        <Footer>© 2018</Footer>
      </Layout>
    </Layout>
)

export default routes;
