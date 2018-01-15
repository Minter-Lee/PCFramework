import { Component } from 'react';
import { Button, Card, Icon, Collapse, Table, Modal, Transfer } from 'antd';

const Panel = Collapse.Panel;

export default class RuleEditView extends Component {
    contructor( props, context) {
        super(props, context);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick() {

    }

    render() {
        const extraContent = <Button onClick={this.handlerClick}><Icon type='swap' />移入/移出</Button>
        return <div>
            <Card title='规则使用者' extra={extraContent} >
                <Collapse bordered={false} >
                    <Panel key='ruleTablePanel'>
                        'something'
                    </Panel>
                </Collapse>
            </Card>
            <Modal title='选择应用规则的员工' >
                <Transfer></Transfer>
            </Modal>
        </div>
    }
}