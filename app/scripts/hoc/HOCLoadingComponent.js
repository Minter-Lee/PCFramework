import { Component } from 'React';
import { Spin } from 'antd';

const HOCLoadingComponent = WrappedComponent => 
    class extends WrappedComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {loading, error} = this.props;
        if(loading) {
            return <Spin size='large' tip='loading...' />
        }else if(error) {
            return <div>"error"</div>
        }

        return super.render();
    }
}

export default HOCLoadingComponent;