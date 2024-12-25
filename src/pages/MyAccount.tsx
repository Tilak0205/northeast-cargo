import React,{useState,useMemo,useEffect} from 'react';
import {Link as Rlink} from 'react-router-dom';
import client from '../services/client';

const MyAccount:React.FC = ()=>{

    const [processing,setProcessing] = useState(false);

    const [FullName,setFullName] = useState('');
    const [OrganisationName,setOrganisationName] = useState('');
    const [TelephoneNo,setTelephoneNo] = useState('');

    
    const getInfo = async()=>{
        setProcessing(true);
        let res = await client.get('myAccountInfo/',{});
        if(res.success && res.data){
            setFullName(res.data.FullName);
            setOrganisationName(res.data.OrganisationName);
            setTelephoneNo(res.data.TelephoneNo);
        }else{
            window.snakAlert.error(res.message);
        }
        setProcessing(false);
    }

    const handleSubmit = async()=>{
        setProcessing(true);
        let res = await client.post('myAccountInfo/update_info/',{FullName,OrganisationName,TelephoneNo});
        if(res.success && res.data){
            window.snakAlert.success(res.data);
        }else{
            window.snakAlert.error(res.message);
        }
        setProcessing(false);
    }

    useEffect(()=>{
        getInfo();
    },[]);

    return (

            <>
            <h1>My Account</h1>
            <div className="section mt-10">

                
                    {FullName?
                        <>
                        <Rlink to="/changePassword">Change Password</Rlink>
                        </>
                    :''}
                    
                
            </div>
            loading ....
            
            </>
            
    )

}

export default MyAccount;