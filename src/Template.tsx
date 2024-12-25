import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {BrowserRouter as Router, useNavigate} from 'react-router-dom';
import Routes from './Routes';
import { Breadcrumb, Layout, Menu  } from 'antd';
import { 
    DashboardOutlined,
    UserOutlined ,
    PlusSquareOutlined,
    FormOutlined,
    SendOutlined,
    AuditOutlined,
    UsergroupAddOutlined,
    LogoutOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const Template = (props:any)=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = useSelector((state:any)=>state.isLogin);
    
    const navItems:any = [
        { label: "Dashboard", key: 1, target: "/", icon:<DashboardOutlined /> },
        { label: "Profile", key: 2, target:"/edit-profile" , icon: <UserOutlined /> },
        { label: "Manage Quotes", key: 4, target:"/quotes" , icon:<FormOutlined /> },
        { label: "Manage Bookings", key: 3, target:"/bookings" , icon:<PlusSquareOutlined /> },
        { label: "Shipments", key: 5, target:"/shipments" , icon:<SendOutlined /> },
        { label: "Invoices", key: 6, target:"/invoices" , icon:<AuditOutlined /> },
        { label: "User Management", key: 7, target:"/admin/users" , icon:<UsergroupAddOutlined /> },
        { label: "Logout", key: 8, target:"/event" , icon:<LogoutOutlined  /> },
      ];

    const handleMenuClick = ({ key }) => {
        const { target } = navItems.find(item => item.key == key) || {};
        if (target) {
            navigate(target);
        }
    };

    useEffect(()=>{
        let html_body:any = document.querySelector('body');
        if(isLogin){
            if(html_body){
                html_body.classList.add('authorize');
                html_body.classList.remove('unauthorize');
            }
        }else{
            if(html_body){
                html_body.classList.add('unauthorize');
                html_body.classList.remove('authorize');
            }
            
        }
    },[isLogin])
 
    return (
        <>
        <Layout className={isLogin?'authorize':'unauthorize'}>
            {isLogin && <>
                <Header style={{ display: 'flex', alignItems: 'center', padding:'0 40px' }}>
                    <div className="logo" />
                </Header> 
            </> }
            <Content className='container-wrapper'>
                {/*isLogin && 
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                */}
                <Layout style={{ padding: '20px 0px',  borderRadius: 6 }} className='container'>
                    {isLogin && 
                    <Sider style={{ background: '#e1e1e1' }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            items={navItems}
                            onClick={handleMenuClick}
                            
                        />
                    </Sider>
                    }
                    <Content className='inner-page-wrapper'>
                        <Routes/>
                    </Content>
                </Layout>
                
            </Content>
        </Layout>
        <div className="footer">
                    <div className="copy-right">&#169; CNE. All rights reserved - {(new Date()).getFullYear()}</div>
                </div>
        </>
    )
}


export default Template;

