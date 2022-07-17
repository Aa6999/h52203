import React from "react"
import {Link,NavLink,useNavigate,Outlet} from "react-router-dom"
import Head from "../components/Head"
import withRouter from "../util/withRouter"

import { LaptopOutlined, NotificationOutlined, UserOutlined ,WechatOutlined,} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu , Col, Row ,Button} from 'antd';
const { Header, Content, Sider } = Layout;
class Home extends React.Component{
            constructor(){
                super()
                this.state={
                    menu:[
                        {
                            key:'/homepage',
                            label:'主页',
                        },
                        {
                            key:"/interview",
                            label:"首页管理",                    
                            children:[
                                {
                                    key:"/list1",
                                    label:"列表",
                                },
                                {
                                    key:"/add2",
                                    label:"添加"
                                },
                            ]
                        },
                        {
                            key:"/user",
                            label:"用户管理",
                          
                            children:[
                                {
                                    key:"/list3",
                                    label:"列表",
                                },
                                {
                                    key:"/add4",
                                    label:"添加"
                                },
                            ]
                        },
                        {
                            key:"/acc",
                            label:"其他管理",
                            children:[
                                {
                                    key:"/list5",
                                    label:"列表",
                                },
                                {
                                    key:"/add6",
                                    label:"添加"
                                },
                            ]
                        },
                    ]
                }
            
            }
            changeMenu=( { item, key, keyPath, domEvent })=>{
                    console.log(key,keyPath[1]);
               const a= this.props.navigate(`${keyPath[1]+key}`)
          }
    render(){

            return(
            
                        <Layout >
                                <Header className="header" style={{color:"#fff"}}>
                                <div className="logo" />{/* items={items1} */}
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}  />
                            <Row>
                                <Col span={16} >
                                    <WechatOutlined style={{color:"#ff0",fontSize:40,verticalAlign:"middle",marginRight:10}} />
                                    电商后台管理系统
                                </Col>
                                        {/* text-align  右对齐 */}
                                <Col span={8} style={{textAlign:'right'}}>
                                    <Button type="link">退出</Button>
                                </Col>
                            </Row>
                    </Header>
                    <Layout >
                    <Sider width={200} className="site-layout-background">
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={['/home11']}
                        defaultOpenKeys={['/interview']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={this.state.menu}
                        onClick={this.changeMenu}
                        />
                        
                    </Sider>
                    <Layout
                        style={{
                        padding: '0 24px 24px',
                        }}
                    >
                        <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                        >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280, 
                        }}
                        >
                            Content
                            <Outlet/>
                             
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
                
            )
    }
}
export default withRouter(Home) 