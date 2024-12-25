import React from 'react';
import { Button, Checkbox, Form, Input, Row,Col, Card, Space, Table, Tag, Divider, Dropdown, Select  } from 'antd'
import Meta from 'antd/es/card/Meta';
import {UserOutlined,LockOutlined, BookOutlined, FileDoneOutlined, FileTextOutlined, FileSyncOutlined, ProfileOutlined} from '@ant-design/icons';
import type { TableProps } from 'antd';
import {useNavigate} from 'react-router-dom';

const Bookings = ()=>{
    const navigate = useNavigate();

    const columns = [
        {
          title: 'Transaction ID',
          dataIndex: 'transactoin_id',
          key: 'transactoin_id',
        },
        {
          title: 'Tracking Number',
          dataIndex: 'tracking_no',
          key: 'tracking_no',
        },
        {
          title: 'Account ID',
          dataIndex: 'account_id',
          key: 'account_id',
        },
        {
            title: 'Sender',
            dataIndex: 'sender',
            key: 'sender',
        },
        {
          title: 'Receiver',
          dataIndex: 'receiver',
          key: 'receiver',
        },
        {
          title: 'Date Submitted',
          dataIndex: 'date_submitted',
          key: 'date_submitted',
        },
        {
          title: 'Date Sent',
          dataIndex: 'date_sent',
          key: 'date_sent',
        },
        {
          title: 'Quote Validation',
          dataIndex: 'quote_validation',
          key: 'quote_validation',
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
        transactoin_id: '#0001',
        tracking_no:"00123213",
        account_id: '0001',
        sender: 'By Road',
        receiver: 'ABC',
        date_submitted: '01/01/2024',
        date_sent: '01/01/2024',
        quote_validation: '01/01/2024',
        tags: ['Pending'],
    },
    {
        key: '2',
        transactoin_id: '#0002',
        tracking_no:"0088722",
        account_id: '00012',
        sender: 'By Road',
        receiver: 'ABC',
        date_submitted: '01/01/2024',
        date_sent: '01/01/2024',
        quote_validation: '01/01/2024',
        tags: ['In Progress'],
    }
    ]

    const handleNewBooking = ()=>{
      navigate("/new-booking")
    }

 
    return(
        <>
            <div  className="section">
              <h1 className='page-heading'>Manage Bookings </h1>
              <br/>

              <Row className='booking-status'>
                <Col span={20}>
                  <Row gutter={24}>
                      <Col span={4}>
                          <Card style={{ width: 160 }} bordered={false} className="card card-booking">
                              <Meta
                                  avatar={<ProfileOutlined />}
                                  title="Bookings"
                                  description="10"
                                  
                              />
                          </Card>
                      </Col>
                      <Col span={4}>
                          <Card style={{ width: 160 }} bordered={false} className="card card-progress">
                              <Meta
                                  avatar={<FileSyncOutlined />}
                                  title="In Progress"
                                  description="68"
                                  
                              />
                          </Card>
                      </Col>
                      <Col span={4}>
                          <Card style={{ width: 160 }} bordered={false} className="card card-completed">
                              <Meta
                                  avatar={<FileDoneOutlined />}
                                  title="Completed"
                                  description={45}
                                  
                              />
                          </Card>
                      </Col>
                  </Row>
                </Col>
                <Col span={4} style={{textAlign:'right'}}>
                  <Button onClick={handleNewBooking} type="primary" size='large'  >New Booking</Button>
                </Col>
              </Row>
            
              <Divider/>
              
              <Row gutter={10}>
                <Col span={12}>
                  <Input  type='text' placeholder='Search'/>
                </Col>
                <Col span={4}>
                  <Select
                    placeholder="Filter By"
                    style={{ width: '100%' }}
                    //onChange={handleChange}
                    options={[
                      { value: 'booking_id', label: 'Booking ID' },
                      { value: 'name', label: 'Customer Name' }
                    ]}
                  />
                </Col>
                <Col span={4}>
                  <Select
                      showSearch
                      placeholder="Sort By"
                      style={{ width: '100%' }} 
                      //onChange={handleChange}
                      options={[
                        { value: 'asc', label: 'Asc' },
                        { value: 'desc', label: 'Desc' }
                      ]}
                     
                    />
                </Col>
                <Col span={4}>
                  <Button onClick={handleNewBooking} type="primary">Search</Button>
                </Col>
              </Row>
              <Divider/>
            
              <Table columns={columns} dataSource={data} />
            </div>  
        </>
    )
}

export default Bookings;