import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { RuleManagementActions } from './RuleManagementRedux';

import RuleEditView from '../components/DinnerManagement/RuleManagement/RuleEditView';
import { Button, Card, Icon } from 'antd';

@connect(state => ({
    ruleData: state.ruleManagement.ruleManagementData
}), dispatch => ({
    push: bindActionCreators(push,dispatch),
    ruleActions: bindActionCreators(RuleManagementActions,dispatch)
}))
export default class RuleManagementView extends Component {
    constructor(props, context) {
        super(props, context);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(e) {
        debugger
        this.props.push('/management/rule/edit/' 
            + e.currentTarget.getAttrbute('data-rule-id'));
    }

    render() {
        const extraContent = <Button onClick={this.handlerClick} data-rule-id=123 ><Icon type='edit' /></Button>

        return <div>
            <Route path='/management/rule/edit/:ruleId' component={RuleEditView} />
    
            <Button key='newRuleBtn'>新建规则</Button>
            <Button key='batchEditBtn'>批量处理</Button>
            <Button key='searchRuleBtn'>搜索</Button>
            <section key='cardContent'>
                <Card title='something' extra={extraContent} key='1' >
                    <p>something</p>
                </Card>
            </section>
        </div>
    }
}