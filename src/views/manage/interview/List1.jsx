import React from 'react'
import request from '../../../util/request'

import { Table, Button, pagination,Popconfirm} from 'antd'
import withRouter from '../../../util/withRouter'
class List1 extends React.Component {

    state = {
        page: 1,     //多少页
        size: 5,    //多少条
        datalist: [], //列表数据
        total: 0,// 总数
        SelectId: []
    }


    getData = () => {
        const { page, size } = this.state
        const data = request.get("/iq", {
            params: {
                page,
                size
            }
        }).then(({ data }) => {
            // console.log('data',data);
            this.setState({
                datalist: data.data.result,
                total: data.data.total,

            })
        })

    }
    componentDidMount() {
        this.getData()
    }
    //修改
    modify = (id) => {
        console.log(this.props);
        // console.log(id);
        const url = this.props.location.pathname
        // console.log(url);
        this.props.navigate(url + '/modify/' + id)
    }
    //删除
    removeId =async (id) => {
        console.log(id);
        // const {data}=await request.delete(`/iq/+${id}`)
        // console.log(data);
        
    }
    render() {
        const { datalist, total, size } = this.state

        const columns = [
            {

                title: '文章标题', //表头  
                dataIndex: 'question',//当前列数据
                key: 'id',//表格id
                render: (text, record, index) => {
                    return (
                        <>
                            <h4>{text}</h4>
                            <div style={{ color: "#585858" }}>{record.answer}回答,{record.hot}浏览量</div>
                        </>
                    )
                }
            },
            {
                title: '阅读数量',
                dataIndex: 'difficulty',
                // key: 'name',
                // render: (text) => <a>{text}</a>,
            },
            {
                title: '是否审核',
                dataIndex: 'checked',
                width: 80,
                // key: 'name'
                //字段对应的数据，当前行数据，行索引
                render: (text, record, index) => {
                    // console.log(text);
                    // console.log(record);
                    return text === true ? <Button style={{ color: "red" }} size='small'>已审核</Button> : <Button size='small'>待审核</Button>
                }
            },
            {
                title: '添加时间',
                dataIndex: 'addtime',
                // key: 'name',
                render: (text, record, index) => {

                    return new Date(text).toLocaleString();
                }
            },
            {
                title: '编辑',
                dataIndex: 'name',
                key: 'name',
                render: (text, record, index) => {
                   // console.log(record._id);
                    return (
                        <>
                            <Button type="primary" size='small' ghost onClick={this.modify.bind(this, record._id)}>修改</Button>
                           
                            <Popconfirm title="确定要删除吗？" okText="是" cancelText="否"
                                onConfirm={()=>{
                                    this.removeId(record._id)
                                }}
                            >
                                    <a href="#"><Button danger size='small' >删除</Button></a>
                            </Popconfirm>
                        </>
                    )
                }
            }
        ]
        const rowSelection = {
            type: 'checkbox',
            onChange: (selectedRowKeys, selectedRows) => {
                console.log("selectedRowKeys", selectedRowKeys);//id值
                console.log("selectedRows", selectedRows); //当前行所有数据
                this.setState({
                    SelectId: selectedRows  //拿到所有的复选框
                })
            }
        };
        const pagination = {
            size: "small",
            total: total,   //数据总数
            pageSize: size,
            showTotal(total, range) {
                // console.log(total, range);
                return `共${total}条数据`
            },
            showSizeChanger: true,
            onChange: (page, pageSize) => {
                console.log(page, pageSize);//第2页 5条一页
                // setState 异步
                this.setState({
                    page,  //多少页
                    size: pageSize,  //多少条
                }, () => {
                    //需要等page和size修改后再发起请求
                    //回调函数重新渲染
                    this.getData()

                })

                // this.forceUpdate()//强制刷新视图
            }
        }
        return (


            <div>
                <Table
                    rowKey="_id"
                    rowSelection={rowSelection}
                    columns={columns} dataSource={datalist}
                    pagination={pagination}
                />
            </div>
        )
    }
}
export default withRouter(List1);