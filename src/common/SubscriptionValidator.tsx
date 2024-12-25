import React,{useState,useEffect,useCallback} from 'react';
import client from '../services/client';
import {useParams} from 'react-router-dom';
import AlertMessage from './AlertMessage';

const SubscriptionValidator = (props:any)=>{
    const params = useParams();

    const [IsValid,setIsValid] = useState(false);
    const [processing,setprocessing] = useState(false);

    const validate = useCallback(async() => {
        setprocessing(true);
        let res = await client.get('mySubscription/isExpired/',{sid:params.sid});
        if(!res.error){
            setIsValid(res.data==true);
        }
        setprocessing(false);
    },[params]);

    useEffect(()=>{
        validate();
    },[]);

    if(IsValid){
        return props.children;
    }
    if(processing){
        return (
            <>loading...</>
        )
    }else{
        return (
            <div className="section mt-10">
                <AlertMessage message={{type:'error',message:'Selected subscription is expired or not valid.'}}/>
            </div>
        )
    }
}

export default SubscriptionValidator;