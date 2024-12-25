import React,{useState,useMemo,useEffect} from 'react';
import {Link as Rlink,useNavigate} from 'react-router-dom';
import AlertMessage from '../common/AlertMessage';
import client from '../services/client';

import {useSelector,useDispatch} from 'react-redux';
import {login} from '../store/actions';

import { Button, Checkbox, Form, Input, Row,Col } from 'antd'
import {UserOutlined,LockOutlined} from '@ant-design/icons';

const ResetPassword:React.FC = ()=>{
    type FieldType = {
        email?:string
    };
    const isLogin = useSelector((state:any)=>state.isLogin);
    const navigate = useNavigate();
    const [Message,setMessage] = useState({type:'',message:''});

    const [processing,setProcessing] = useState(false);

    const [Email,setEmail] = useState('');
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const handleSubmit = async(values: any)=>{
        setProcessing(true);
        
        /*let res:any = await client.post('auth/',{email:Email,pwd:values.email});
        if(res && res.success){
            
        }else{
            setMessage({type:'error',message:res.message});
        }*/

        setProcessing(false);
    }

    useEffect(() => {
        if(isLogin){
            navigate('/');
        }
    }, []);

    return (
        <div style={{minWidth:'450px'}}>
            <div className="logo"></div>
            <h1>Forgot Password</h1>
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
 
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                            Submit
                        </Button>
                    </Form.Item>


                    <Form.Item>
                        <Rlink to="/login"> Login</Rlink>
                        
                        <Rlink to="/registration" style={{float:'right'}}> Sign up</Rlink>
                    </Form.Item>
                </Form>

                
                
            </div>
            
        </div>
    )

}

export default ResetPassword;