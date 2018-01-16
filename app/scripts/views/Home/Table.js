import { PureComponent } from 'react';
import { Table } from 'antd';
import HOCLoadingComponent from '../../hoc/HOCLoadingComponent';
import PropTypes from 'prop-types';
import less from './Table.less';

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key:'name'
},{
    title: '年龄',
    dataIndex: 'age',
    key:'age'
},{
    title: '住址',
    dataIndex: 'address',
    key:'address'
},{
    title: '性别',
    dataIndex: 'gender',
    key:'gender'
},{
    title: '操作',
    dataIndex: 'gender',
    key:'option'
}]

@HOCLoadingComponent
export default class HomeTable extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        error: PropTypes.bool.isRequired,
        payload: PropTypes.object.isRequired,
        loadTableData: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.loadTableData();
    }

    componentDidUpdate() {
        const { data } = this.props.payload,
            hasExtralTd = document.getElementsByClassName('ant-table-td-extral').length > 0 ? true : false;
        if(data && !hasExtralTd) {
            // 反模式的内容补充，慎用，慎用！
            const tableBodyDom = document.getElementsByClassName('ant-table-tbody')[0];

            this.props.payload.data.map((item, index) => {
                const extraTrDom = document.createElement('tr');
                extraTrDom.className = 'ant-table-expanded-row ant-table-expanded-row-level-1';
                extraTrDom.innerHTML = [
                    '<td colspan="5" class="ant-table-td-extral">', 
                        '<p>',
                            '<label><b>订单编号:</b></label>',
                            '<span>',item.orderId,'</span>',
                            '<label><b>订单名称:</b></label>',
                            '<span>',item.orderName,'</span>',
                        '</p>', 
                    '</td>'].join('');
                tableBodyDom.insertBefore(extraTrDom, document.getElementsByClassName('ant-table-row')[index]);
            });
        }
    }

    render() {
        return <Table 
            columns={columns} 
            dataSource={this.props.payload.data}
            rowKey={record => record.personId}
        />
    }
}