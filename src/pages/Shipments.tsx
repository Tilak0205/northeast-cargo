import React from 'react';
import { Button, Checkbox, Form, Input, Row,Col, Card, Space, Table, Tag  } from 'antd'
import Meta from 'antd/es/card/Meta';
import {UserOutlined,LockOutlined, BookOutlined, FileDoneOutlined, FileTextOutlined, FileSyncOutlined, ProfileOutlined} from '@ant-design/icons';
import type { TableProps } from 'antd';

const Bookings = ()=>{

    const columns = [
        {
          title: 'Transaction ID',
          dataIndex: 'transactoin_id',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Service Type',
          dataIndex: 'service_type',
          key: 'age',
        },
        {
            title: 'Customer',
            dataIndex: 'customer',
            key: 'customer',
          },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Status',
          key: 'Status',
          dataIndex: 'status',
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'red' : 'green';
                if (tag === 'pending') {
                  color = 'red';
                }else if (tag === 'In Progress') {
                    color = 'blue';
                }else if (tag === 'Completed') {
                  color = 'green';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>View Details{record.name}</a>
            </Space>
          ),
        },
    ];
    
    const data = [{
        key: '1',
        customer:"ABC Corp",
        transactoin_id: '0001',
        service_type: 'By Road',
        date: '01/01/2024',
        tags: ['Pending'],
    },
    {
        key: '1',
        customer:"ABC Corp",
        transactoin_id: '0002',
        service_type: 'By Road',
        date: '01/01/2024',
        tags: ['In Progress'],
    },
    {
      key: '1',
      customer:"ABC Corp",
      transactoin_id: '0003',
      service_type: 'By Road',
      date: '01/01/2024',
      tags: ['Completed'],
  }
    ]
    return(
        <>
            <div  className="section">
                <h1 className='page-heading'>Shipments </h1>     
                
                
                <Table columns={columns} dataSource={data} />
                 

            </div>  
        </>
    )
}

export default Bookings;