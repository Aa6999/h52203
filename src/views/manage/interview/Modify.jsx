import React from 'react'
import request from '../../../util/request'
import withRouter from '../../../util/withRouter'
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
    Rate ,
} from 'antd';
class Modify extends React.Component {
    state = {
        data: {}
    }
    getDate = async () => {
        const id = this.props.param.id
        console.log(id);
        const { data } = await request.get(`/iq/${id}`)
        console.log(data);

        this.setState({
            data: data.data
        })
        this.myform.setFieldsValue(data.data)
    }
    onFinish = async ({_id,...values}) => {
        console.log('values', values)

        const {data} = await request.patch('/iq/'+_id,values)
        console.log('data=',data)
    }
    componentDidMount() {

        this.getDate()
    }

    render() {
        const { data } = this.props
        return (
            <div>
                修改Modify
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 8,
                    }}
                    layout="horizontal"
                    ref={el => this.myform = el}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        label="_id"
                        name="_id"
                        hidden
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item label="文章标题" name ='question'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="分类">
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
{/* 
                    <Form.Item label="DatePicker">
                        <DatePicker />
                    </Form.Item> */}
                    <Form.Item label="难度系数" name="difficulty">
                        <Rate  />
                    </Form.Item>
                    <Form.Item label="浏览量" name="hot">
                        <InputNumber />
                    </Form.Item>
              
                    <Form.Item label="审核" name="checked" valuePropName="checked">
                        <Switch />
                    </Form.Item>
                    <Form.Item   wrapperCol={{
                        offset: 4,
                    }}>

                    </Form.Item>
                        <Button type='primary' htmlType="submit">提交</Button>
                </Form>
               
            </div>
        )
    }
}

export default withRouter(Modify);