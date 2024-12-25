import React,{useState,useMemo,useEffect} from 'react';
import {Link as Rlink,useNavigate,useParams} from 'react-router-dom';

import client from '../services/client';
import {useSelector} from 'react-redux';
import AlertMessage from '../common/AlertMessage';

let _password:string = ''; // for referencing

const ChangePassword:React.FC = ()=>{
    const isLogin = useSelector((state:any)=>state.isLogin);
    const navigate = useNavigate();
    const params = useParams();
    const [Message,setMessage] = useState({type:'',message:''});

    const [processing,setProcessing] = useState(false);
    const [ShowForm,setShowForm] = useState(false);


    const [OldPassword,setOldPassword] = useState('');
    const [NewPassword,setNewPassword] = useState('');
    const [ConfirmPassword,setConfirmPassword] = useState('');
    
    _password = NewPassword;
    
    useEffect(() => {
        if(isLogin){
            setShowForm(true);
        }else{
            validateUUID();
        }
        
        
    }, [])

    const validateUUID = async()=>{
        setProcessing(true);
        let res:any = await client.get('user/validateUUIDLink',{uuid:params.uuid});
        
        if(res && res.success){
            setShowForm(true);
        }else{
            setMessage({type:'error',message:res.message});
        }
        setProcessing(false);
    }

    const handleSubmit = async()=>{
        setProcessing(true);
        
        let param:any = {};
        let res:any = null;
        param = {
            NewPassword,ConfirmPassword,uuid:params.uuid
        };
        if(isLogin){
            param = {...param,OldPassword};
        }
        res = await client.post('user/changePassword',param);    
        if(res && res.success){
            if(isLogin){
                navigate("/myAccount");
                window.snakAlert.success(res.data);
            }else{
                setMessage({type:'success',message:res.data});
            }
            
        }else{
            setMessage({type:'error',message:res.message});
        }

        setProcessing(false);
    }

    return (
        <div className={!isLogin?'login':''}>
            {isLogin?'':<div className="logo-mini"></div>}
            
            <h1>Update Password</h1>
            <div className={!isLogin?'paper':'section mt-10'}>
                <AlertMessage message={Message}/>

                {ShowForm?
                    <></>
                :
               ''
                }
                {!isLogin?
                    
                            <Rlink to="/resetPassword"> Forgot your password?</Rlink>
                    
                :''}
                
                loading....
                <br/>
            </div>
            
        </div>
    )

}

export default ChangePassword;