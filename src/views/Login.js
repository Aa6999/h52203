import React from "react"
import { Button, Checkbox, Form, Input } from 'antd';
import request from "../util/request";
import {useNavigate} from "react-router-dom"

import { useParams } from 'react-router-dom'
const Login=()=>{
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
          ]
    }

            //表单提交
    const onFinish = function({username,password}){
        console.log("username",username)
        console.log("password",password)
     // password = SHA256(password).toString()
        request.get('/user/login',{
            params:{
                username,
                password
            }
        }).then(({data})=>{
            console.log('data',data.status)
            if(data.status === 200){
                  localStorage.setItem('userInfo',JSON.stringify(data.data))
                    navigate("/home")
             }

        })
    }
    return(
        <div style={{padding:30}}>
            <h1>用户登录</h1>
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
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <Checkbox>免登陆</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
                </Form>
        </div>
    )
}
export default Login