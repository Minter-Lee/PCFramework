import { PureComponent } from 'react';

const style = {
    height: '5000px'
}

// export default (props) => <h1 style={style} >OtherView</h1>

export default class OtherView extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return <h1 style={style}>'OtherView'</h1>
    }
}