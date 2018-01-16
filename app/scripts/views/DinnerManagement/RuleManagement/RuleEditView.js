import { PureComponent } from 'react';
import { Button, Card, Icon, Collapse, Table, Modal, Transfer } from 'antd';

const Panel = Collapse.Panel;

export default class RuleEditView extends PureComponent {
    constructor( props, context) {
        super(props, context);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick() {

    }

    render() {
        debugger
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

        const renderItem = (item) => {
            const customLabel = (
              <span className="custom-item">
                {item.title} - {item.description}
              </span>
            );

            return {
              label: customLabel, // for displayed item
              value: item.title // for title and filter matching
            }
        }

        const extraContent = <Button onClick={this.handlerClick}><Icon type='swap' />移入/移出</Button>;
        
        return <div>
            <Card title='规则使用者' extra={extraContent} >
                <Collapse bordered={false} >
                    <Panel key='ruleTablePanel'>
                        'something'
                    </Panel>
                </Collapse>
            </Card>
            <Modal title='选择应用规则的员工' >
                <Transfer 
                    dataSource={dataSource}
                    targetKeys={[1]}
                    render= {renderItem}
                />
            </Modal>
        </div>
    }
}