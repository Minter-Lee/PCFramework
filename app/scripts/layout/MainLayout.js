import { Component } from 'react'; 
import less from './MainLayout.less';
import MainMenuView from './MainMenuView';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { mainMenuActions } from './MainLayoutRedux';

@connect(state => ({
    mainMenuData: state.layout.mainMenuData
}), dispatch => ({
    mainMenuActions: bindActionCreators(mainMenuActions, dispatch),
    dispatch: dispatch
}))
export default class MainLayout extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { mainMenuData, mainMenuActions, children, dispatch } = this.props;

        return[
            <div className='main-nav' key='main-nav'>
                <MainMenuView {...mainMenuData} {...mainMenuActions} dispatch={dispatch}/>
            </div>,
            <div className='main-container' key='main-container'>
                <div className='main-header' key='main-header'></div>
                <div className='main-content' key='main-content'>{children}</div>
            </div>
        ]
    }
}