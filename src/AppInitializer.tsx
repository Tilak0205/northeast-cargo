import React,{useState,useEffect} from 'react';
import client from './services/client';

import { useSelector, useDispatch } from 'react-redux'
import {login,logout} from './store/actions';
import { Alert, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

//import logo from './assets/images/logo.png';

const AppInitializer = (props:any)=>{
    const dispatch = useDispatch();
    const isLogin = useSelector((state:any)=>state.isLogin);
    const isInitialized = useSelector((state:any)=>state.init);

    const verifyToken = async()=>{
        //dispatch(logout());
        dispatch(login({
            email: 'n.ahmed.ansari@gmail.com',  
            role: 'Admin',
            id:'1',
            name:`nadeem`,
            token:'asdfdsaf'
        }));
        //return
        let auth:any = localStorage.getItem('auth');
        if(auth){
            let user = JSON.parse(auth);
            let res:any = await client.post('/auth/verifyToken',{token:user.token,UserID:user.UserID});
            
            if(res.error){
                window.snakAlert.error(res.message);
            }else{
                if(res.success && res.data){
                    // dispath login
                    dispatch(login(res.data));
                }else{
                    dispatch(logout());
                }
            }
        }else{
            dispatch(logout());
        }
    }

    useEffect(()=>{
        if(!isLogin){
            verifyToken();   
            //document.body.classList.add('bg-gradient');
        }else{
            //document.body.classList.remove('bg-gradient');
        }
    },[])

    return (
        <>
            {isInitialized?props.children:<SiteLoader/>}
        </>
    )
}

const SiteLoader = ()=>{
    return (
        <div className="site-loader">
            <div className="wrapper">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}>
                <Alert
                    message="Cargo Northeast"
                    description="Driving Progress, One Delivery at a Time"
                    type="info"
                />
             </Spin>
            </div>
        </div>
    )
}



export default AppInitializer;

