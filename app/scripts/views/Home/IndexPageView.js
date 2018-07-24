import { PureComponent } from 'React';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HomeTable from './Table';
import { tableActions } from './IndexPageRedux';

@connect(state => ({
    tableData: state.home.tableData
}), dispatch => ({
    tableActions: bindActionCreators(tableActions, dispatch)       
}))
export default class HomeView extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render () {
        const { tableData, tableActions} = this.props;
        // return <HomeTable {...tableData} {...tableActions} />
        return <div>
            <h1>home</h1>
            <span onClick={()=> {
                this.props.history.push('/home/detail/')
            }} >toDetail</span><br />
            <span onClick={()=> {
                this.props.history.push('/other/')
            }} >toOther</span>
        </div>;
    }
}