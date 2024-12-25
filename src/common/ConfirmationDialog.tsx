import React,{useState,useRef} from 'react';

/**
 * call 
 * window.ConfirmationDialog("",callback) // return true/false
 * 
 */
declare global {
    interface Window {
        ConfirmationDialog:any
    }
}

const ConfirmationDialog = (props:any)=>{
    const [open, setOpen] = useState(false);
    const [message,setMessage] = useState('');
    const [title,setTitle] = useState('');
    const btnCancel:any = useRef(null);
    const btnConfirm:any = useRef(null);

    const handleClose = () => {
        setOpen(false);
    };
  
    // open dialog
    window.ConfirmationDialog = async(title:string,message:string)=>{
        setOpen(true); 
        setMessage(message);
        setTitle(title);
        // wait for the dialog to open
        await new Promise(resolve => setTimeout(resolve, 300));
        // promise
        return new Promise((resolve,reject)=>{
          
            if(btnCancel && btnCancel.current){
                btnCancel.current.addEventListener('click',()=>{
                    setOpen(false);
                    return resolve(false);
                });
            }
            if(btnConfirm && btnConfirm.current){
                btnConfirm.current.addEventListener('click',()=>{
                    setOpen(false);
                    return resolve(true);
                });
            }
        });
    }

    return (
      <div>
        
      </div>
    );
  }

  export default ConfirmationDialog;