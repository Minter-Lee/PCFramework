// export default (props) => <h1>DetailView</h1>

import { PureComponent } from 'react';

export default class DetailView extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div>
            <h1>DetailView</h1>
            <span onClick={()=> {
                this.props.history.push('/home/')
            }} >toHome</span><br />
            <span onClick={()=> {
                this.props.history.push('/other/')
            }} >toOther</span>
        </div>;
    }
}