import { Component } from 'React';
import { Spin, Modal } from 'antd';

const HOCLoadingComponent = WrappedComponent => 
    class extends WrappedComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {loading, error, payload} = this.props;3
        if(error) {
            Modal.error({
                title: '对不起服务好像出错了！',
                content: `错误信息:${payload.message}，请您联系客服解决。`
            });
        }
        if(loading) {
            return <Spin size='large' tip='loading...' style={{    
                width: '100%',
                marginTop: '40%'
            }} />
        }else if(error) {
            return <div>'请求失败！'</div>
        }

        return super.render();
    }
}

export default HOCLoadingComponent;