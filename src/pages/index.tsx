import React from 'react';
import { Button, Checkbox, Form, Input, Row,Col, Card  } from 'antd'
import Meta from 'antd/es/card/Meta';
import {UserOutlined,LockOutlined, BookOutlined, FileDoneOutlined, FileTextOutlined, FileSyncOutlined, ProfileOutlined} from '@ant-design/icons';
import Icon from '@ant-design/icons';

import IMG_SERVCES from '../assets/images/services.png';

const HomePage = ()=>{
    return(
        <>
            <div  className="dashboard section">
                <h1 className='page-heading'>Overview </h1>   
                <Row gutter={24}>
                    <Col span={6}>
                        <Card style={{ width: 300, marginTop: 16}} bordered={false} className="card card-quote">
                            <Meta
                                avatar={<FileTextOutlined  />}
                                title="Quotes"
                                description="49"
                                
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card style={{ width: 300, marginTop: 16 }} bordered={false} className="card card-booking">
                            <Meta
                                avatar={<ProfileOutlined />}
                                title="Bookings"
                                description="10"
                                
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card style={{ width: 300, marginTop: 16 }} bordered={false} className="card card-progress">
                            <Meta
                                avatar={<FileSyncOutlined />}
                                title="In Progress"
                                description="68"
                                
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card style={{ width: 300, marginTop: 16 }} bordered={false} className="card card-completed">
                            <Meta
                                avatar={<FileDoneOutlined />}
                                title="Completed"
                                description={45}
                                
                            />
                        </Card>
                    </Col>
                </Row>
                
                <br/>
                <h1 className='page-heading'>Services</h1>     
                <Row gutter={24}>
                    <Col span={24}>
                        <img src={IMG_SERVCES} style={{width:'98%'}}/>
                    </Col>
                </Row>
                

            </div>  
        </>
    )
}

export default HomePage;