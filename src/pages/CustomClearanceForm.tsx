import React from 'react';
import { Button, Checkbox, Form, Input, Row,Col, Card, Switch, Select, Divider, Tooltip, Radio, DatePicker, Table, Popconfirm, Dropdown, Space, Flex, Typography, InputNumber, Tabs, Alert  } from 'antd'
import {UserOutlined,LockOutlined, BookOutlined, FileDoneOutlined, FileTextOutlined, FileSyncOutlined, ProfileOutlined, QuestionCircleOutlined, DeleteOutlined, DownOutlined, CheckOutlined, BorderTopOutlined, PicCenterOutlined, PlusOutlined, ExclamationCircleOutlined} from '@ant-design/icons';
import { Option } from 'antd/es/mentions';
import "/node_modules/flag-icons/css/flag-icons.min.css";

const CustomClearanceForm = ()=>{
   
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };


    
    const columns = [
        {
          title: 'File Name',
          dataIndex: 'file_name',
          key: 'file_name',
        },
        {
          title: 'File Size',
          dataIndex: 'file_size',
          key: 'file_size',
        },
        {
          title: 'Type',
          dataIndex: 'type',
          key: 'type',
          render: (_, record: { key: React.Key }) =>
                <Form.Item valuePropName='1'
                //label="Food Product"
                name="food_product"
                style={{margin:0}}
                rules={[]}
                >
                    <Select
                        placeholder="Select a option and change input text above"
                        //onChange={}
                        allowClear
                        >
                        <Option value="some value">some value</Option>
                    </Select>
                </Form.Item>
        },
        {
          title: 'Attachment Reference',
          dataIndex: 'att_ref',
          key: 'att_ref',
          render: (_, record: { key: React.Key }) =>
                <Form.Item valuePropName='1'
                //label="Food Product"
                name="food_product"
                style={{margin:0}}
                rules={[]}
                >
                    <Input />
                </Form.Item>
        },
        {
            title: 'operation',
            dataIndex: 'file_name',
            render: (_, record: { key: React.Key }) =>
                dataSource.length >= 1 ? (
                <Popconfirm  title="Sure to delete?" onConfirm={() =>{} }>
                    <a>Delete</a>
                </Popconfirm>
                ) : null,
        },
      ];



    const dataSource = [
        {
          key: '1',
          file_name:'image1.jpg',
          file_size:'500kb',
          type:'Other Goods Documents',
          att_ref:''
        },
        {
            key: '2',
            file_name:'invoice.pdf',
            file_size:'350kb',
            type:'Other Goods Documents',
            att_ref:''
        },  
    ];
  
    return(
        <>
            <div  className="section" style={{background: '#f1f1f157',borderRadius: '8px',padding: '14px 18px'}}>
                <h1 className='page-heading'><span className='font-blue'>Shipment Details:</span> <span className='font-green'>Customs Clearance</span> </h1>     
                
                <h2 className='font-green'>Clearance Type: </h2>
                <Form
                    name="basic"
                    //labelCol={{ span: 8 }}
                    labelAlign="left"
                    //wrapperCol={{ span: 16 }}
                    //style={{ maxWidth: 700 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Row gutter={16}>
                        
                        <Col span={6}>EU Clearance ( Europe to UK) : </Col>
                        <Col span={18}>
                            <Form.Item valuePropName='1'
                                //label="Food Product"
                                name="food_product"
                                rules={[]}
                            >
                                <Switch checked={true} />
                            </Form.Item>
                        </Col>

                        <Col span={6}>Rest of the world ( to UK) </Col>
                        <Col span={18}>
                            <Form.Item valuePropName='1'
                                //label="Non Food Product"
                                name="non_food_product"
                                rules={[]}
                            >
                                <Switch  /> &nbsp; &nbsp; <span className='font-blue'>Make sure all health certificates are available</span>
                            </Form.Item>
  
                        </Col>

                    </Row>
                    <Row>
                        <Col span={24}><h2 className='font-green'>Transport Mode : </h2></Col>
                    </Row>
                    <Row gutter={16}>
                        
                        <Col span={6}>
                            <Form.Item valuePropName='1'
                                label="Air Freight"
                                name="food_product"
                                rules={[]}
                            >
                                <Switch />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item valuePropName='1'
                                label="Sea Freight"
                                name="food_product"
                                rules={[]}
                            >
                                <Switch />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item 
                                label="Road Freight"
                                name="RoadFreight"
                                rules={[]}
                            >
                                <Switch checked={true} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}><h2 className='font-green'>Declaration Type : </h2></Col>
                    </Row>
                    <Row gutter={16}>
                        
                        <Col span={6}>Import declaration  : </Col>
                        <Col span={18}>
                            <Form.Item valuePropName='1'
                                //label="Food Product"
                                name="food_product"
                                rules={[]}
                            >
                                <Switch checked={true} />
                            </Form.Item>
                        </Col>

                        <Col span={6}>Export declaration </Col>
                        <Col span={18}>
                            <Form.Item valuePropName='1'
                                //label="Non Food Product"
                                name="non_food_product"
                                rules={[]}
                            >
                                <Switch />
                            </Form.Item>
  
                        </Col>

                    </Row>
                    <Row>
                        <Col span={24}><Divider/></Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <h2 className='font-blue'>Receiver Details</h2>
                            <Row>
                                <Col span={6}>Company Name  : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>Company Address : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>EORI No (Keep editable ) : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>VAT No(Keep editable)  : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>Contact Email  : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>Contact No   : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <h2 className='font-blue'>Sender  Details </h2>
                            <Row>
                                <Col span={6}>Company Name  : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>Company Address : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>EORI No (Keep editable ) : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>VAT No(Keep editable)  : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>Contact Email  : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>Contact No   : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <h2 className='font-green'>Buyer ( if different from Receiver)
                            <Form.Item valuePropName='1' style={{position:'absolute', right:'200px',top:6}}
                                    //label="Food Product"
                                    name="food_product"
                                    rules={[]}
                                >
                                    <Switch />
                                </Form.Item>
                            </h2>
                            <Row>
                                <Col span={6}>Company Name  : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>Company Address : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>EORI No (Keep editable ) : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>VAT No(Keep editable)  : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>Contact Email  : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>Contact No   : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <h2 className='font-green'>Seller ( if different from Sender)  
                                <Form.Item valuePropName='1' style={{position:'absolute', right:'200px',top:6}}
                                    //label="Food Product"
                                    name="food_product"
                                    rules={[]}
                                >
                                    <Switch />
                                </Form.Item>
                            </h2>
                            <Row>
                                <Col span={6}>Company Name  : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>Company Address : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>EORI No (Keep editable ) : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>VAT No(Keep editable)  : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>Contact Email  : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                                <Col span={6}>Contact No   : </Col>
                                <Col span={18}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="invoice_value"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Input style={{width:360}} /> &nbsp; &nbsp; <span className='font-red'></span> 
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}><Divider /></Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div className='shipment-dropdown' >
                                <Row gutter={0}>
                                    <Col span={5}>
                                        <Dropdown className='dropdown'
                                            trigger={['click']}
                                            menu={{ items:[{key:1}]  }}
                                            dropdownRender={(menu) => (
                                                <div className='shipment-drawer'>
                                                    <FormOrigin/>
                                                </div>
                                            )}
                                            >
                                            <div className='wrapper' onClick={(e) => e.preventDefault()}>
                                                <strong className='title'>Origin</strong> <CheckOutlined /> <br/>
                                                Factory/Warehouse | <span className="flag fi fi-ch"></span> China 
                                            </div>
                                        </Dropdown>
                                    </Col>
                                    <Col span={1}><Divider type="vertical" style={{height:'100%'}} /></Col>
                                    <Col span={5}>
                                        <Dropdown className='dropdown'
                                            trigger={['click']}
                                            menu={{ items:[{key:1}]  }}
                                            dropdownRender={(menu) => (
                                                <div className='shipment-drawer'>
                                                    <FormDestination/>
                                                </div>
                                            )}
                                            >
                                            <div className='wrapper' onClick={(e) => e.preventDefault()}>
                                                <strong className='title'>Destination</strong> <CheckOutlined /> <br/>
                                                Business address | <span className="flag fi fi-ch"></span> France 
                                            </div>
                                        </Dropdown>                                        
                                    </Col>
                                    <Col span={1}><Divider type="vertical" style={{height:'100%'}} /></Col>
                                    <Col span={5}>
                                        <Dropdown className='dropdown'
                                            trigger={['click']}
                                            menu={{ items:[{key:1}]  }}
                                            dropdownRender={(menu) => (
                                                <div className='shipment-drawer'>
                                                    <FormLoads/>
                                                </div>
                                            )}
                                            >
                                            <div className='wrapper' onClick={(e) => e.preventDefault()}>
                                                <strong className='title'>Loads</strong> <CheckOutlined /> <br/>
                                                2 Units | Total : 0.02 cbm, 2kg
                                            </div>
                                        </Dropdown>
                                    </Col>
                                    <Col span={1}><Divider type="vertical" style={{height:'100%'}} /></Col>
                                    <Col span={6}>
                                        <Dropdown className='dropdown'
                                            trigger={['click']}
                                            menu={{ items:[{key:1}]  }}
                                            dropdownRender={(menu) => (
                                                <div className='shipment-drawer'>
                                                    <FormGoods/>
                                                </div>
                                            )}
                                            >
                                            <div className='wrapper' onClick={(e) => e.preventDefault()}>
                                                <strong className='title'>Goods</strong> <CheckOutlined /> <br/>
                                                $20,000 | Goods are ready
                                            </div>
                                        </Dropdown>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col span={24}><Divider /></Col>
                    </Row>
                    <Row>
                        <Col span={6}>Temperature Controlled Goods :</Col>
                        <Col span={18}>
                            <Form.Item  name="temp_controlled">
                                <Radio.Group value="">
                                    <Radio.Button value="yes">Yes</Radio.Button>
                                    <Radio.Button value="no">No</Radio.Button>
                                </Radio.Group> &nbsp; &nbsp;

                                <Input style={{width:200}} placeholder='Min Temperature' /> &nbsp; &nbsp;
                                <Input style={{width:200}} placeholder='Max Temperature' />

                            </Form.Item>
                        </Col>

                        <Col span={24}><Divider /></Col>
                    </Row>
                    
                    <Row>
                        <Col span={11}>
                            <h2 className='font-blue'>Collection </h2>
                            <Row>
                                <Col span={8}>Pickup Date :</Col>
                                <Col span={16}>
                                    <Form.Item  name="pickup_date">
                                        <DatePicker />
                                    </Form.Item>
                                </Col>

                                <Col span={8}>Forklift required :</Col>
                                <Col span={16}>
                                    <Form.Item  name="forklift">
                                        <Radio.Group value="">
                                            <Radio.Button value="yes">Yes</Radio.Button>
                                            <Radio.Button value="no">No</Radio.Button>
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                                <Col span={24}><Divider /></Col>        
                                <Col span={24}>
                                    <Row gutter={6}>
                                        <Col span={11}>Reference Text</Col>
                                        <Col span={11}>Type</Col>
                                        <Col span={11}>
                                            <Form.Item  name="ref_text">
                                                <Input  /> 
                                            </Form.Item>    
                                        </Col>
                                        <Col span={11}>
                                            <Form.Item  name="ref_text">
                                                <Input   /> 
                                            </Form.Item>    
                                        </Col>
                                        <Col span={2}>
                                            <DeleteOutlined style={{zoom:2}} />
                                        </Col>
                                        <Col span={24}>
                                            <Button type="primary">Add Another</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={2} style={{textAlign:'center'}}><Divider type="vertical"  style={{height:'100%'}}/></Col>
                        <Col span={11}>
                            <h2 className='font-blue'>Pickup </h2>
                            <Row>
                                <Col span={8}>Diliver Date :</Col>
                                <Col span={16}>
                                    <Form.Item  name="pickup_date">
                                        <DatePicker />
                                    </Form.Item>
                                </Col>

                                <Col span={8}>Forklift required :</Col>
                                <Col span={16}>
                                    <Form.Item  name="forklift">
                                        <Radio.Group value="">
                                            <Radio.Button value="yes">Yes</Radio.Button>
                                            <Radio.Button value="no">No</Radio.Button>
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                                <Col span={24}><Divider /></Col>        
                                <Col span={24}>
                                    <Row gutter={6}>
                                        <Col span={11}>Reference Text</Col>
                                        <Col span={11}>Type</Col>
                                        <Col span={11}>
                                            <Form.Item  name="ref_text">
                                                <Input  /> 
                                            </Form.Item>    
                                        </Col>
                                        <Col span={11}>
                                            <Form.Item  name="ref_text">
                                                <Input   /> 
                                            </Form.Item>    
                                        </Col>
                                        <Col span={2}>
                                            <DeleteOutlined style={{zoom:2}} />
                                        </Col>
                                        <Col span={24}>
                                            <Button type="primary">Add Another</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}><Divider/></Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <h2 className='font-blue'>Additional Services </h2>
                            <Row>
                                <Col span={4}>Cargo Insurance : &nbsp;
                                    <Tooltip title="Help text">
                                        <QuestionCircleOutlined />
                                    </Tooltip>
                                </Col>
                                <Col span={20}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="payment_incoterms"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Radio.Group value="">
                                            <Radio.Button value="yes">Yes</Radio.Button>
                                            <Radio.Button value="no">No</Radio.Button>
                                        </Radio.Group>  &nbsp; &nbsp; <span className='font-blue'>I don't want cargo insurance and I am aware of forwarder's limited liability</span> 
                                    </Form.Item>
                                </Col>
                                <Col span={4}>Port Charges : &nbsp;
                                    <Tooltip title="Help text">
                                        <QuestionCircleOutlined />
                                    </Tooltip>
                                </Col>
                                <Col span={20}>
                                    <Form.Item
                                        //label="Invoice Value"
                                        name="payment_incoterms"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                        >
                                        <Radio.Group value="">
                                            <Radio.Button value="yes">Yes</Radio.Button>
                                            <Radio.Button value="no">No</Radio.Button>
                                        </Radio.Group>  &nbsp; &nbsp; <span className='font-blue'>Yes, add origin charges</span> 
                                    </Form.Item>
                                </Col>
                            </Row>
                            
                        
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}><Divider/></Col>
                    </Row>
                    <Row>
                        <Col span={12}> 
                            <h2 className='font-blue'>Custom Services</h2> 
                            <h2 className='font-green'>Export Custom Clearence &nbsp;
                                <Tooltip title="Help text">
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </h2>
                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                            //label="Invoice Value"
                                            name="payment_incoterms"
                                            rules={[{ required: true, message: 'Please input your password!' }]}
                                            >
                                            <Radio.Group value="">
                                                <Radio.Button value="yes">Yes</Radio.Button>
                                                <Radio.Button value="no">No</Radio.Button>
                                            </Radio.Group> 
                                        </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        label="Export Customs Clearance"
                                        name="payment_incoterms"
                                        rules={[{ message: 'Please input your password!' }]}
                                        >
                                        <Select style={{width:360}}
                                            placeholder="Select a option and change input text above"
                                            //onChange={}
                                            allowClear
                                            >
                                            <Option value="some value">some value</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}> 
                            <h2>&nbsp;</h2> 
                            <h2 className='font-green'>Import Custom Clearence &nbsp;
                                <Tooltip title="Help text">
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </h2>
                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                            //label="Invoice Value"
                                            name="payment_incoterms"
                                            rules={[{ required: true, message: 'Please input your password!' }]}
                                            >
                                            <Radio.Group value="yes">
                                                <Radio.Button value="yes">Yes</Radio.Button>
                                                <Radio.Button value="no">No</Radio.Button>
                                            </Radio.Group> 
                                        </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item
                                        label="Import Customs Clearance"
                                        name="payment_incoterms"
                                        rules={[{ message: 'Please input your password!' }]}
                                        >
                                        <Select style={{width:360}}
                                            placeholder="Select a option and change input text above"
                                            //onChange={}
                                            allowClear
                                            >
                                            <Option value="some value">some value</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}><Divider/></Col>
                    </Row>
                    <Row>
                        <Col span={16}>
                            <h2 className='font-blue'>Attachements</h2>
                            <h2 className='font-green'>Add comercial invoice, packing list, declaration etc.</h2>
                            <Button type="primary">
                                Upload file
                            </Button>
                            <br/><br/>
                            <div style={{padding:10, background:'#f1f1f1', borderRadius:8}}>
                                <Table dataSource={dataSource} columns={columns} pagination={false} size="small" /> 
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}><Divider/></Col>
                    </Row>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" size='large'>
                            Submit Booking
                        </Button>
                    </Form.Item>
                </Form>
                
            </div>  
        </>
    )
}


const FormOrigin = (props:any)=>{
    return (
        <>
        <Row gutter={12}>
            <Col span={24}>
                <h2>Where are you shipping to?</h2>
            </Col>
            <Col span={8}>
                <label>Type</label>
                <Select
                      showSearch
                      placeholder="Type"
                      style={{ width: '100%' }} 
                      //onChange={handleChange}
                      options={[
                        { value: 'warehouse', label: 'Factory Warehouse' },
                      ]}     
                    />
            </Col>
            <Col span={8}>
                <label>Country</label>
                <Select
                      showSearch
                      placeholder="Country"
                      style={{ width: '100%' }} 
                      //onChange={handleChange}
                      options={[
                        { value: 'warehouse', label: 'Factory Warehouse' },
                      ]}
                     
                    />
            </Col>
            <Col span={8}>
                <label>Address</label>
                <Input placeholder='Address'/>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Divider style={{margin:'10px 0'}}/>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Button type="primary">Submit</Button>
            </Col>
        </Row>
        </>
    )
}



const FormDestination = (props:any)=>{
    return (
        <>
        <Row gutter={12}>
            <Col span={24}>
                <h2>Where are you shipping from?</h2>
            </Col>
            <Col span={8}>
                <label>Type</label>
                <Select
                      showSearch
                      placeholder="Type"
                      style={{ width: '100%' }} 
                      //onChange={handleChange}
                      options={[
                        { value: 'warehouse', label: 'Factory Warehouse' },
                      ]}     
                    />
            </Col>
            <Col span={8}>
                <label>Country</label>
                <Select
                      showSearch
                      placeholder="Country"
                      style={{ width: '100%' }} 
                      //onChange={handleChange}
                      options={[
                        { value: 'warehouse', label: 'Factory Warehouse' },
                      ]}
                     
                    />
            </Col>
            <Col span={8}>
                <label>Address</label>
                <Input placeholder='Address'/>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Divider style={{margin:'10px 0'}}/>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Button type="primary">Submit</Button>
            </Col>
        </Row>
        </>
    )
}


const FormGoods = (props:any)=>{
    return (
        <>
        <Row gutter={12}>
            <Col span={24}>
                <h2>Tell us about your goods</h2>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <label>Good Value</label>
                <Form.Item
                    name="donation"
                    noStyle
                    rules={[{ required: true, message: 'Please input donation amount!' }]}
                >
                    <InputNumber addonAfter={
                        <Form.Item name="suffix" noStyle>
                        <Select style={{ width: 70 }}>
                          <Option value="USD">$</Option>
                          <Option value="CNY">¥</Option>
                        </Select>
                      </Form.Item>
                    } style={{ width: '100%' }} />
                </Form.Item>
            </Col>
        </Row>
        <Row>
            <Col style={{marginBottom:10}}>
                <Checkbox>Shipment contains hazardous goods Commercial only</Checkbox>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <label>Are your goods ready? </label>
                <Select
                      showSearch
                      placeholder="Country"
                      style={{ width: '100%' }} 
                      //onChange={handleChange}
                      options={[
                        { value: 'warehouse', label: 'Factory Warehouse' },
                      ]}
                     
                    />
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Divider style={{margin:'10px 0'}}/>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Button type="primary">Submit</Button>
            </Col>
        </Row>
        </>
    )
}

const FormLoads = (props:any)=>{
    
    const LooseCargo = ()=>{
        return (
            <>
            <Row gutter={[12,12]}>
                <Col span={24}>
                    <Radio.Group name="radiogroup" defaultValue={1}>
                        <Radio value={1}>Calculate by unit type</Radio>
                        <Radio value={2}>Calculate by total shipment</Radio>
                    </Radio.Group>
                </Col>

                <Col span={18}>
                    <span>Package type</span>
                    <Form.Item name="input-number" noStyle>
                        <Radio.Group  defaultValue="a" style={{display:'block', textAlign:'center'}} className='full-width'  >
                            <Radio.Button value="a">Pallets</Radio.Button>
                            <Radio.Button value="b">Box/Crates</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <span># of units</span>
                    <Form.Item name="input-number" noStyle >
                        <InputNumber min={1}  style={{width:'100%'}} />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <label>Pallet type</label>
                    <Select
                        showSearch
                        placeholder="Pallet type"
                        style={{ width: '100%' }} 
                        //onChange={handleChange}
                        options={[
                            { value: 'Pallet', label: 'Pallet (non speficied size)' },
                        ]}
                        
                    />
                </Col>

                <Col span={18}>
                    <label>Dimensions (L×W×H per unit)</label>
                    <Form.Item>
                        <Space.Compact>
                            <Form.Item
                                name={['L','H','H']}
                                noStyle
                                rules={[{ required: true, message: 'Please input donation amount!' }]}
                                >
                                <InputNumber placeholder='L' style={{ width: '100%' }}/>
                            </Form.Item>
                            <Form.Item
                                name={['L','H','H']}
                                noStyle
                                rules={[{ required: true, message: 'Please input donation amount!' }]}
                                >
                                <InputNumber placeholder='W' style={{ width: '100%' }}/>
                            </Form.Item>
                            <Form.Item
                                name={['L','H','H']}
                                noStyle
                                rules={[{ required: true, message: 'Please input donation amount!' }]}
                                >
                                <InputNumber placeholder='H' addonAfter={
                                    <Form.Item name="suffix" noStyle>
                                        <Select style={{ width: 70 }}>
                                            <Option value="KG">KG</Option>
                                            <Option value="LB">LB</Option>
                                        </Select>
                                    </Form.Item>
                                } style={{ width: '100%' }} />
                            </Form.Item>
                        </Space.Compact>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <label>Weight (Per unit)</label>
                    <Form.Item
                        name="donation"
                        rules={[{ required: true, message: 'Please input donation amount!' }]}
                        >
                        <InputNumber addonAfter={
                            <Form.Item name="suffix" noStyle>
                                <Select style={{ width: 70 }}>
                                    <Option value="KG">KG</Option>
                                    <Option value="LB">LB</Option>
                                </Select>
                        </Form.Item>
                        } style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Divider style={{margin:'10px 0'}}/>
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{textAlign:'right'}}>
                    <Button icon={<PlusOutlined />} >Add Another</Button> &nbsp;
                    <Button type="primary">Confirm</Button>
                </Col>
            </Row>
            </>
        )
    }

    const Container = ()=>{
        return (
            <>
            <Row gutter={[12,12]}>
                <Col span={24}>
                <Alert 
                    message="Containers can be shipped to or from a business address only if there is a loading dock." 
                    type="info" 
                    showIcon 
                    icon={<ExclamationCircleOutlined />}
                />
                </Col>
                <Col span={6}>
                    <label># of units</label>
                    <Form.Item
                        name="donation"
                        rules={[{ required: true, message: 'Please input donation amount!' }]}
                        >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
                <Col span={18}>
                    <label>Container type</label>
                    <Form.Item name="input-number" noStyle>
                        <Radio.Group  defaultValue="a" style={{display:'block', textAlign:'center'}} className='quater-width'  >
                            <Radio.Button value="a">20'</Radio.Button>
                            <Radio.Button value="b">40'</Radio.Button>
                            <Radio.Button value="b">40' HC</Radio.Button>
                            <Radio.Button value="b">45' HC</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Checkbox>Overweight</Checkbox>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Divider style={{margin:'10px 0'}}/>
                </Col>
            </Row>
            <Row>
                <Col span={24} style={{textAlign:'right'}}>
                    <Button icon={<PlusOutlined />} >Add Another</Button> &nbsp;
                    <Button type="primary">Confirm</Button>
                </Col>
            </Row>
            </>
        )
    }
    
    return (
        <>
        <Row gutter={12}>
            <Col span={24}>
                <Tabs style={{width:'700px'}}
                    defaultActiveKey="loose_cargo"
                    items = {[
                        {
                            key: 'loose_cargo',
                            label: `Loose Cargo`,
                            children: <LooseCargo/>,
                            icon: <BorderTopOutlined />,
                        },
                        {
                            key: 'container',
                            label: `Container`,
                            children: <Container/>,
                            icon: <PicCenterOutlined />,
                        }
                    ]}
                />
            </Col>
        </Row>
        
        </>
    )
}

export default CustomClearanceForm;