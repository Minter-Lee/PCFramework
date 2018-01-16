import { Menu, Icon, Button } from 'antd';
import { Component } from 'react';
import HOCLoadingComponent from '../../hoc/HOCLoadingComponent';
import { push } from 'react-router-redux';

const SubMenu = Menu.SubMenu;

@HOCLoadingComponent
export default class MainNavLayout extends Component {
    constructor(props, context) {
        super(props, context);
        this.linkToPage = this.linkToPage.bind(this);
    }

    linkToPage({item, key, keyPath}) {
        this.props.dispatch(push(item.props.path));
    }

    componentDidMount() {
        this.props.getMenuData();
    }

    render() {
        const { data } = this.props.payload,
              { menuId } = data[0],
              { pathname } = window.location;
        // 未考虑除主页标签外的一级可点击标签
        let selectedKey = menuId,
            renderContent = [];
        // 解析菜单数据结构
        data.map((item,index)=> {
            const {items, path} = item,
                  subMenuContent = [];
            if (item.items) {
                renderContent.push(<SubMenu key={item.menuId} title={item.menuName}>{
                    items.map( subItem => {
                        const { menuId, menuName, path } = subItem; 
                        // 确定选中的标签
                        selectedKey = (path == pathname) ? menuId : selectedKey;
                        return <Menu.Item key={menuId} path={path}>{menuName}</Menu.Item>
                    })
                }</SubMenu>)
            } else {
                renderContent.push(<Menu.Item 
                    key={ item.menuId } 
                    path={item.path}>{
                        item.menuName
                    }</Menu.Item>);
            }
        });

        return<Menu
            theme="dark"
            onClick={this.linkToPage}
            defaultSelectedKeys={[selectedKey+'']}
            mode="inline"
        >{renderContent}</Menu>
    }
}