import React,{useState,useMemo,useEffect} from 'react';
import {Link as Rlink,useNavigate} from 'react-router-dom';
import AlertMessage from '../common/AlertMessage';
import client from '../services/client';

import {useSelector,useDispatch} from 'react-redux';
import {login} from '../store/actions';

import { Button, Checkbox, Form, Input, Row,Col } from 'antd'
import {UserOutlined,LockOutlined} from '@ant-design/icons';

const Login:React.FC = ()=>{
    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
        email?:string
    };
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLogin = useSelector((state:any)=>state.isLogin);
    const Role = useSelector((state:any)=>state.user?state.user.role:'');
    if(isLogin){
        navigate('/');
        /*if(Role == 'Admin'){
            history.push('/admin/dashboard');
        }else{
            history.push('/mySubscription');
        }*/
    }

    
    const [Message,setMessage] = useState({type:'',message:''});
    const [processing,setProcessing] = useState(false);

    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const handleSubmit = async(values: any)=>{
        setProcessing(true);
        
        let res:any = await client.post('auth/',{email:Email,pwd:Password});
        if(res && res.success){
            
            dispatch(login(res.data));
            
        }else{
            setMessage({type:'error',message:res.message});
        }

        setProcessing(false);
    }

    return (
        <div style={{minWidth:'450px'}}>
            <div className="logo"></div>
            <h1>Log into your account</h1>
            <div className="paper">
                <AlertMessage message={Message}/>

                <Form
                    name="basic"
                    className="login-form"
                    //labelCol={{ span: 16 }}
                    //wrapperCol={{ span: 16 }}
                    style={{ }}
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        //label="Email"
                        name="email"
                        rules={[{ required: true, type: "email", message: 'Please input valid email address!' }]}
                        >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>

                    <Form.Item<FieldType>
                        //label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input email address!' }]}
                        >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password"/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                            Submit
                        </Button>
                    </Form.Item>


                    <Form.Item>
                        <Rlink to="/resetPassword"> Forgot your password?</Rlink>
                        
                        <Rlink to="/registration" style={{float:'right'}}> Sign up</Rlink>
                    </Form.Item>
                </Form>

                
                
            </div>
            
        </div>
    )

}

export default Login;