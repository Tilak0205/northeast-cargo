import React from 'react';
import { Button, Checkbox, Form, Input, Row,Col, Card, Space, Table, Tag  } from 'antd'
import Meta from 'antd/es/card/Meta';
import {UserOutlined,LockOutlined, BookOutlined, FileDoneOutlined, FileTextOutlined, FileSyncOutlined, ProfileOutlined} from '@ant-design/icons';
import type { TableProps } from 'antd';

const Users = ()=>{

    const columns = [
        {
          title: 'User ID',
          dataIndex: 'user_id',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Role',
          dataIndex: 'role',
          key: 'role',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>View Details</a>
            </Space>
          ),
        },
    ];
    
    const data = [{
        key: '1',
        user_id: '0001',
        role: 'Admin',
        name: 'Mr. ABC',
        status: 'Active',
    } 
    ]
    return(
        <>
            <div  className="section">
                <h1 className='page-heading'>List of Users </h1>     
                
                <p><Button type="primary">Add New</Button></p>
                <Table columns={columns} dataSource={data} />
                 

            </div>  
        </>
    )
}

export default Users;