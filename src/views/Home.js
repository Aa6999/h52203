import React from "react"
import {Link,NavLink,useNavigate,Outlet} from "react-router-dom"
import Head from "../components/Head"
import withRouter from "../util/withRouter"

import { LaptopOutlined, NotificationOutlined, UserOutlined ,WechatOutlined,} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu , Col, Row ,Button } from 'antd';
const { Header, Content, Sider } = Layout;
class Home extends React.Component{
            constructor(){
                super()
                this.state={
                    menu:[
                        
                        {
                            key:"/interview",
                            label:"首页管理",
                            icon:<UserOutlined/>,                 
                            children:[
                                {
                                    key:"/list1",
                                    label:"列表1",
                                },
                                {
                                    key:"/list2",
                                    label:"添加2"
                                },
                            ]
                        },
                        {
                            key:"/user",
                            label:"用户管理",
                            icon:<LaptopOutlined/>,    
                            children:[
                                {
                                    key:"/list3",
                                    label:"列表3",
                                },
                                {
                                    key:"/add4",
                                    label:"添加4"
                                },
                            ]
                        },
                        {
                            key:"/acc",
                            label:"其他管理",
                            icon:<NotificationOutlined/>,    
                            children:[
                                {
                                    key:"/list5",
                                    label:"列表5",
                                },
                                {
                                    key:"/add6",
                                    label:"添加6"
                                },
                            ]
                        },
                    ]
                }
            
            }
            changeMenu=({ item, key, keyPath, domEvent })=>{
                    // console.log(item, key);
                    // console.log(keyPath, domEvent );
               const a= this.props.navigate(`.${keyPath[1]+key}`)
          }
          
    render(){
                const {menu} = this.state
                // console.log(this.props);
            return(
            
                    <Layout >
                        <Header className="header" style={{color:"#fff"}}>
                                <div className="logo" />{/* items={items1} */}
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}  />
                            <Row>
                                <Col span={16} >
                                    <WechatOutlined style={{color:"#ff0",fontSize:40,verticalAlign:"middle",marginRight:5}} />
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

                            items={menu.map((item, index) => {
                                // console.log(item);
                                const a =item.children;
                                // console.log(a);     
                                return {
                                key: `${item.key}`,
                                // icon: React.createElement(item.icon),
                                label: `${item.label}`,
                                children: a.map((it, j) => {
                                    //   console.log(it);
                                    return {
                                    key: `${it.key}`,
                                    label: `${it.label}`,
                                    };
                                }),
                                };
                            })

                            }
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
                                <Outlet/>
                             
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
                
            )
    }
}
export default withRouter(Home) 