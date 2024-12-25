import React from 'react';
import { Button, Checkbox, Form, Input, Row,Col, Card, Select  } from 'antd'
import Meta from 'antd/es/card/Meta';
import {UserOutlined,LockOutlined, BookOutlined, FileDoneOutlined, FileTextOutlined, FileSyncOutlined, ProfileOutlined} from '@ant-design/icons';
import Icon from '@ant-design/icons';
import { Option } from 'antd/es/mentions';

 
const EditProfile = ()=>{

    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
        fullname?:string;
        email?:string;
        phone?:string;
        confirm_password?:string
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleSubmit = async(values: any)=>{
         
    }


    return(
        <>
            <div  className="section">
                <h1 className='page-heading'>Manage Profile </h1>     
                <Form
                    name="basic"
                    //labelCol={{ span: 8 }}
                    //wrapperCol={{ span: 16 }}
                    //style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <h3>Personal Details</h3>
                    <Row gutter={24}>
                        <Col span={12}>
                        <Row gutter={24}>
                    <Col span={12}>
                            <Form.Item<FieldType>
                            //label="Full Name"
                            name="fullname"
                            rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                            <Input placeholder="First Name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                            <Form.Item<FieldType>
                                //label="Full Name"
                                name="fullname"
                                rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                            <Input placeholder="Last Name" />
                            </Form.Item>
                    </Col>
                    <Col span={12}>
                            <Form.Item<FieldType>
                            //label="Full Name"
                            name="fullname"
                            rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                            <Input placeholder="Contact Email" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                            <Form.Item<FieldType>
                                //label="Full Name"
                                name="fullname"
                                rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                            <Input placeholder="Contact Number" />
                            </Form.Item>
                    </Col>
                    
                    </Row>
                    <h3>Address</h3>
                    <Row gutter={24}>
                    <Col span={12}>
                            <Form.Item<FieldType>
                            //label="Full Name"
                            name="fullname"
                            rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                            <Input placeholder="House No/ Building" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                            <Form.Item<FieldType>
                                //label="Full Name"
                                name="fullname"
                                rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                            <Input placeholder="Address" />
                            </Form.Item>
                    </Col>
                    <Col span={12}>
                            <Form.Item<FieldType>
                            //label="Full Name"
                            name="fullname"
                            rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                            <Input placeholder="City" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                            <Form.Item<FieldType>
                                //label="Full Name"
                                name="fullname"
                                rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                            <Select
                                placeholder="Country"
                                //onChange={onGenderChange}
                                allowClear
                            >
                                <Option value="UK">UK</Option>
                            </Select>
                            </Form.Item>
                    </Col>
                    <Col span={12}>
                            <Form.Item<FieldType>
                                //label="Full Name"
                                name="fullname"
                                rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                            <Input placeholder="Post Code" />
                            </Form.Item>
                    </Col> 
                    
                    </Row>

                    <h3>Company Details</h3>
                    <Row gutter={24}>
                    <Col span={12}>
                            <Form.Item<FieldType>
                            //label="Full Name"
                            name="fullname"
                            rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                            <Input placeholder="Company Name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                            <Form.Item<FieldType>
                                //label="Full Name"
                                name="fullname"
                                rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                            <Input placeholder="Company Registration No." />
                            </Form.Item>
                    </Col>
                    <Col span={12}>
                            <Form.Item<FieldType>
                            //label="Full Name"
                            name="fullname"
                            rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                            <Input placeholder="VAT No" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                            <Form.Item<FieldType>
                                //label="Full Name"
                                name="fullname"
                                rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                            <Input placeholder="EORI No" />
                            </Form.Item>
                    </Col>
                    <Col span={12}>
                            <Form.Item<FieldType>
                                //label="Full Name"
                                name="fullname"
                                rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                            <Input placeholder="Billing Email" />
                            </Form.Item>
                    </Col> 
                    <Col span={12}>
                            <Form.Item<FieldType>
                                //label="Full Name"
                                name="fullname"
                                rules={[{ required: true, message: 'Please input your full name!' }]}
                            >
                            <Input placeholder="Notification Email" />
                            </Form.Item>
                    </Col> 
                    <Col span={6}>
                        <Form.Item>
                        <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                            Save 
                        </Button>
                    </Form.Item>
                    </Col>
                    </Row>
                        </Col>
                    </Row>
                    
                    
                    
                
                </Form>
                 

            </div>  
        </>
    )
}

export default EditProfile;