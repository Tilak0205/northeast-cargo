import React,{lazy,Suspense,Fragment } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate,
    Outlet
} from "react-router-dom";
import {useSelector} from 'react-redux';
import ChangePassword from './pages/ChangePassword';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

// admin

// customer
const Login = lazy(()=> import('./pages/Login'));
const Registration = lazy(()=> import('./pages/Registration')); 
const ResetPassword = lazy(()=> import('./pages/ResetPassword')); 
const Activate = lazy(()=> import('./pages/Activate')); 

const MyAccount = lazy(()=> import('./pages/MyAccount')); 
const HomePage = lazy(()=> import('./pages/index')); 
const EditProfile = lazy(()=> import('./pages/EditProfile')); 
const NewBooking = lazy(()=> import('./pages/NewBooking')); 
const Bookings = lazy(()=> import('./pages/Bookings')); 
const Quotes = lazy(()=> import('./pages/Quotes')); 
const Shipments = lazy(()=> import('./pages/Shipments')); 
const Invoices = lazy(()=> import('./pages/Invoices')); 
const Users = lazy(()=> import('./pages/admin/Users')); 
const NewBookingForm = lazy(()=> import('./pages/NewBookingForm')); 
const CustomClearanceForm = lazy(()=> import('./pages/CustomClearanceForm')); 


const AuthRoute = (props:any)=>{
    const isLogin = useSelector((state:any)=>state.isLogin);
    const user = useSelector((state:any)=>state.user);
     
    if(user && props.role && Array.isArray(props.role) && props.role.indexOf(user.role) !=-1){
        return <Outlet/>;    
    }
    return <Navigate to={"/login"} replace />;    
}


const Fallback = ()=>{
    return (
        <>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /> &nbsp; Loading....
        </> 
    )
}

const Routers = ()=>{
    return(
        <Suspense fallback={<Fallback/>}>
            <Routes>            
                <Route element={<ChangePassword/>} path="/changePassword/:uuid?" />
                <Route element={<ResetPassword/>} path="/resetPassword" />
                <Route element={<Registration/>} path="/registration" />
                <Route element={<Login/>} path="/login" />
                <Route element={<Activate/>} path="/activate/:email" />

                <Route element={<EditProfile/>} path="/edit-profile" />
                <Route element={<NewBooking/>} path="/new-booking" />
                <Route element={<NewBooking/>} path="/new-quote" />
                <Route element={<Bookings/>} path="/bookings" />
                <Route element={<Quotes/>} path="/quotes" />
                <Route element={<Shipments/>} path="/shipments" />
                <Route element={<Invoices/>} path="/invoices" />
                <Route element={<NewBookingForm/>} path="/new-booking/form/:serviceType" />
                <Route element={<CustomClearanceForm/>} path="/custom-clearance/form"/>

                <Route element={<AuthRoute role={['Admin']}/>}>
                    <Route path="/" element={<HomePage />} />
                    <Route element={<Users/>} path="/admin/users" />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default Routers;