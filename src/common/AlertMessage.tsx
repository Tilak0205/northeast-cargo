import React,{useState,useEffect,memo} from 'react';


const AlertMessage:React.FC<any> = (props:any)=>{
    
    const [state,setState]:any = useState({type:props.message.type,message:props.message.message});
    
    useEffect(() => {
        setState({type:props.message.type,message:props.message.message});
    }, [props])

    return (
        <>
        {state.type!=''?
            <>{state.type} {state.message}</>
        :''}
        
        </>
    )
}


export default AlertMessage;