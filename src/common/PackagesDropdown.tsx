import React,{memo,useEffect,useState,useCallback,useRef } from 'react';
import client from '../services/client';

const PackagesDropdown:React.FC<any> = (props:any)=>{
    const autoC = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [options, setOptions]:any = useState([]);
    //const [value, setValue] = React.useState(null);
    let loading = false;// open && options.length === 0;
    
    const search = useCallback(async(term:string='')=>{
        loading =  true;
        let res = await client.get('admin/packages/search',{term:term});
        if(res.success){
            setOptions(res.data);
        }
        loading =  false;
    },[]);

    useEffect(() => {
        search();
    },[]);

    // clear selection
    useEffect(() => {
        if(props.clear === true){
          if(autoC && autoC.current){
            const ele:any = autoC.current.getElementsByClassName('MuiAutocomplete-clearIndicatorDirty')[0];
            if(ele) ele.click();
          }
        }
    }, [props.clear])
    

    return (
    <></>
    )
}

export default memo(PackagesDropdown);