import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Router, Link } from "react-router-dom"
import {
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { createBrowserHistory } from 'history'
import RouterSwitch from './RouterSwitch'
import './BasicLayout.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class BasicLayout extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            collapsed: false,
            theme: 'dark',
        };
    }
    changeTheme = (value: any) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    }
    onCollapse = (collapsed: any) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Router history={createBrowserHistory()} >
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" id="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="/dashboard" icon={<PieChartOutlined />}>
                                <Link to="/dashboard">统计图</Link>
                            </Menu.Item>
                            <SubMenu key="/user" icon={<UserOutlined />} title="用户中心">
                                <Menu.Item key="/user/info">
                                    <Link to="/user/info">用户信息</Link></Menu.Item>
                                <Menu.Item key="/user/settings">
                                    <Link to="/user/settings">安全设置</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                <RouterSwitch />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Router>
            </Layout>
        );
    }
}

export default BasicLayout