import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { RuleListActions } from '../DinnerManagementRedux';

import RuleEditView from './RuleEditView';
import { Button, Card, Icon } from 'antd';

@connect(state => ({
    ruleListData: state.dinner.ruleListData
}), dispatch => ({
    push: bindActionCreators(push,dispatch),
    ruleListActions: bindActionCreators(RuleListActions,dispatch)
}))
export default class RuleManagementView extends Component {
    constructor(props, context) {
        super(props, context);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(e) {
        this.props.push('/dinner/rule/edit/' 
            + e.currentTarget.getAttribute('data-ruleid'));
    }

    render() {
        const extraContent = <Button onClick={this.handlerClick} data-ruleid={123} ><Icon type='edit' /></Button>

        return <div>
            <Button key='newRuleBtn'>新建规则</Button>
            <Button key='batchEditBtn'>批量处理</Button>
            <Button key='searchRuleBtn'>搜索</Button>
            <section key='cardContent'>
                <Card title='something' extra={extraContent} key='1' >
                    <p>'something'</p>
                </Card>
            </section>
            <Route path='/dinner/rule/edit/:ruleId' component={RuleEditView} />
        </div>
    }
}