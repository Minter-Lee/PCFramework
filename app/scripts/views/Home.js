import { Component } from 'React';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeTable from '../components/Home/Table';
import { tableActions } from './HomeRedux';

@connect(state => ({
    tableData: state.home.tableData
}), dispatch => ({
    tableActions: bindActionCreators(tableActions, dispatch)       
}))
export default class HomeView extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render () {
        const { tableData, tableActions} = this.props;
        return <HomeTable {...tableData} {...tableActions} />
    }
}