import { Component } from 'react';

import { Button, Card, Icon } from 'antd';

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

    componentDidMount() {
        // this.props.getDinnerRules()
    }

    render() {
        const extraContent = <Button onClick={this.handlerClick} data-rule-id=123 ><Icon type='edit' /></Button>

        return <div>
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