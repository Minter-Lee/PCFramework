import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HOCLoadingComponent from '../../hoc/HOCLoadingComponent';
import less from './EmployeePicker4Rule.less';
import * as EmployeeActions from './EmployeeRedux4Rule';

import { Table, Button } from 'antd';


@connect( state => ({
    ...state.employeePicker
}), dispatch => ({
    employeePickerActions: bindActionCreators(EmployeeActions, dispatch)
}))
// @HOCLoadingComponent
export default class EmployeePicker4Rule extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.handlerChange = this.handlerChange.bind(this);
        this.saveRulePerson = this.saveRulePerson.bind(this);
        this.tableColumns = [{
            title: '员工',
            dataIndex: 'name',
            key:'name'
        },{
            title: '手机号',
            dataIndex: 'orderId',
            key:'orderId'
        }]

        this.rightTableColumns = [{
            title: '员工',
            dataIndex: 'name',
            key:'name'
        },{
            title: '手机号',
            dataIndex: 'orderId',
            key:'orderId'
        }] 

        this.state = {
            toLeftBtnDisabled: true
        }
    }

    handlerChange(selectedRowKeys, selectedRows){
        this.selectedRows = selectedRows;
        const { toLeftBtnDisabled } = this.state;
        if(!toLeftBtnDisabled && selectedRows.length == 0) {
            this.setState({
                toLeftBtnDisabled: true
            });
        }else if(toLeftBtnDisabled) {
            this.setState({
                toLeftBtnDisabled: false
            });
        }
    }

    saveRulePerson() {
        //dosomething...
    }

    render() {
        const { payload, loading } = this.props;
        const { toLeftBtnDisabled } = this.state;
        const rowSelection = {
            onChange: this.handlerChange
        }
        return <div className='employee-content'>
            <div className='left-content'>
                <Table columns={this.tableColumns} 
                dataSource={payload.data}
                rowKey={record => record.personId}
                loading={loading}
                pagination={{
                    simple: true,
                    size: 'small',
                    pageSize: 7,
                    current:2
                }}
                rowSelection={rowSelection}/>
            </div>
            <div className='btn-content'>
                <Button 
                    type="primary" 
                    disabled={toLeftBtnDisabled} 
                    onClick={this.saveRulePerson}
                >{'>>'}</Button>
                <Button type="primary" disabled>{'<<'}</Button>
            </div>
            <div className='right-content'>
                <Table columns={this.tableColumns} 
                dataSource={payload.data}
                rowKey={record => record.personId}
                loading={loading}
                pagination={{
                    simple: true,
                    size: 'small',
                    pageSize: 7,
                    current:1
                }}/>
            </div>
        </div>
    }

    componentDidMount() {
        this.props.employeePickerActions.loadEmployeePickerData();
    }
}