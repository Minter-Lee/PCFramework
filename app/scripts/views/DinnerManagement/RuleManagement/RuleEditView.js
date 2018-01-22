import { PureComponent } from 'react';
import EmployeePciker4Rule from '../../common/EmployeePicker4Rule';

import { Button, Card, Icon, Collapse, Table, Modal, Transfer } from 'antd';

const Panel = Collapse.Panel;

export default class RuleEditView extends PureComponent {
    constructor( props, context) {
        super(props, context);
        this.handlerClick = this.handlerClick.bind(this);
        this.handlerOk = this.handlerOk.bind(this);
        this.handlerCancel = this.handlerCancel.bind(this);    
    }

    state = {
        visible: false
    }

    handlerClick() {
        this.setState({
            visible: true
        });
    }

    handlerOk() {
        this.setState({
            visible: false
        });
    }

    handlerCancel() {
        this.setState({
            visible: false
        });
    }

    render() {
        const dataSource = [
        {
            key: 1,
            title: '张三',
            description: '人员',
            disabled: false
        },{
            key: 2,
            title: '李四',
            description: '人员',
            disabled: false
        },{
            key: 3,
            title: '王五',
            description: '人员',
            disabled: false
        }]

        const extraContent = <Button onClick={this.handlerClick}>
            <Icon type='swap' />移入/移出</Button>;

        return <div>
            <Card title='规则使用者' extra={extraContent} >
                <Collapse bordered={false} >
                    <Panel key='ruleTablePanel'>
                        'something'
                    </Panel>
                </Collapse>
            </Card>
            <Modal 
                title='选择应用规则的员工' 
                visible={this.state.visible}
                onCancel={this.handlerCancel}
                onOk={this.handlerOk}
                width='700px'
                bodyStyle={{minHeight: '300px'}}
            >
                <EmployeePciker4Rule/>
            </Modal>
        </div>
    }
}