import React,{useState,useMemo,useEffect} from 'react';
import {Link as Rlink,useParams,useNavigate} from 'react-router-dom';
import client from '../services/client';
import AlertMessage from '../common/AlertMessage';

import {useSelector} from 'react-redux';

const Activate:React.FC = ()=>{
    const params = useParams();
    const [Message,setMessage] = useState({type:'',message:''});

    const [processing,setProcessing] = useState(false);

    const navigate = useNavigate();
    const isLogin = useSelector((state:any)=>state.isLogin);
    
    useEffect(() => {
        if(isLogin){
            navigate('/');
        }
        if(!params.email){
            window.snakAlert.error('Activation link is not valid');
        }else{
            activate();  
        }
    }, [])
    
    const activate = async()=>{
        setProcessing(true);
        let res:any = await client.post('registrations/activate',{email:params.email});
        if(res && res.success){
            setMessage({type:res.data.type,message:res.data.message});
        }else{
            setMessage({type:'error',message:res.message});
        }
        setProcessing(false);
    }

    return (
        <div className="login">
            <div className="logo-mini"></div>
            <h1>Account Activation</h1>
            
            <div className="paper">
                <AlertMessage message={Message}/>
            
                {Message.type=='success'?
                <>
                    <br/><Rlink to="/login">Please click here to login</Rlink>
                </>
                :''}

                loading....
            </div>
        </div>
    )

}

export default Activate;