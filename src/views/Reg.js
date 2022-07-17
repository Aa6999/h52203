import React from "react"
import Head from "../components/Head"
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";
import request from "../util/request";
import { Link,NavLink ,useNavigate} from "react-router-dom"
const Reg=()=>{
    const navigate = useNavigate();
    const rules ={
        username:[
            {
              required: true,
              message: '请输入用户名!',
            },
          ],
          password:[
            {
              required: true,
              message: '请输入密码!',
            },
            {
                min: 6,
                max:10,
                message: '密码必须为6-10位字符!',
              },
          ]
    }

            //表单提交
    const onFinish = function({username,password}){
        console.log("username",username)
        console.log("password",password)
     // password = SHA256(password).toString()
        request.post('/user/reg',{
                username,
                password
        }).then(({data})=>{
            console.log('data',data)
            navigate('/login?username='+username)

           
        })
    }
    return(
        <div style={{padding:30}}>
            <h1>用户注册</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 10,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
                >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={rules.username}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={rules.password}
                >
                    <Input.Password />
                </Form.Item>

                

                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
                </Form>
        </div>
    )
}
export default Reg