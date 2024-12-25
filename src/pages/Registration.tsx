import React,{useState,useMemo,useEffect} from 'react';
import {Link as Rlink,useNavigate} from 'react-router-dom';
import client from '../services/client';
import AlertMessage from '../common/AlertMessage';
import {useSelector} from 'react-redux';

import { Button, Checkbox, Col, Form, Input, Row, Select } from 'antd';
import {UserOutlined,LockOutlined} from '@ant-design/icons';
import { Option } from 'antd/es/mentions';

let _password:string = ''; // for referencing

const Registration:React.FC = ()=>{
    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
        fullname?:string;
        email?:string;
        phone?:string;
        confirm_password?:string
      };
      
    const isLogin = useSelector((state:any)=>state.isLogin);
    const navigate = useNavigate();

    const [processing,setProcessing] = useState(false);
    const [Message,setMessage] = useState({type:'',message:''});

    const [Email,setEmail] = useState('');
    const [FullName,setFullName] = useState('');
    const [OrganisationName,setOrganisationName] = useState('');
    const [TelephoneNo,setTelephoneNo] = useState('');
    const [Password,setPassword] = useState('');
    const [ConfirmPassword,setConfirmPassword] = useState('');
    
    _password = Password;
    
    useEffect(() => {
        if(isLogin){
          navigate('/');
        }
    }, [])

      
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const handleSubmit = async(values: any)=>{
        setProcessing(true);
        //registrations/create
        let params = {
            Email,FullName,OrganisationName,TelephoneNo,Password,ConfirmPassword
        };
        let res:any = await client.post('registrations/create',params);
        if(res && res.success){
            setMessage({type:'success',message:res.data});
        }else{
            setMessage({type:'error',message:res.message});
        }

        setProcessing(false);
    }

    return (
        <div style={{width:'450px'}}>
            <div className="logo"></div>
            <h1>Registration</h1>
            <div className="paper">
                <AlertMessage message={Message}/>

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
    <Row gutter={16}>
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
              <Input placeholder="Phone" />
            </Form.Item>
      </Col>
      <Col span={12}>
            <Form.Item<FieldType>
              //label="Full Name"
              name="fullname"
              rules={[{ required: true, message: 'Please input your full name!' }]}
            >
            <Input placeholder="Email / Username" />
          </Form.Item>
      </Col>
      <Col span={24} >
            <Form.Item<FieldType>
                //label="Full Name"
                name="fullname"
                rules={[{ required: true, message: 'Please input your full name!' }]}
              >
              <Input type='password'  placeholder="Password" />
            </Form.Item>
      </Col>
      <Col span={24}>
            <Form.Item<FieldType>
                //label="Full Name"
                name="fullname"
                rules={[{ required: true, message: 'Please input your full name!' }]}
              >
              <Input type='password' placeholder="Confirm Password" />
            </Form.Item>
      </Col>
      
       
      
    </Row>
    
    <Form.Item>
        <Button type="primary" htmlType="submit" style={{width:'100%'}}>
            Submit 
        </Button>
    </Form.Item>
  
  </Form>
  <Rlink to="/login">Back</Rlink>

            
            </div>
            
        </div>
    )

}

export default Registration;