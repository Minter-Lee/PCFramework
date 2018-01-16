import { Component } from 'react'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import MenuView from './MenuView';
import { menuActions } from './IndexPageRedux';

import { Layout } from 'antd';
const { Sider } = Layout;

@connect(state => ({
    menuData: state.sider.menuData
}), dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
    push: bindActionCreators(push, dispatch)
}))
export default class MainLayout extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { menuData, menuActions, push } = this.props;

        return <Sider breakpoint="lg" collapsedWidth="0">
            <MenuView {...menuData} {...menuActions} push={push}/>
        </Sider>
    }
}