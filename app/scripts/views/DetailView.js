// export default (props) => <h1>DetailView</h1>

import { PureComponent } from 'react';

export default class DetailView extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <h1>'DetailView'</h1>
    }
}