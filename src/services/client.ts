const axios = require('axios');
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT + '/api/';

const client = {
    get: async(url:string,params:any)=>{
        try{
            console.log(`${API_ENDPOINT}/${url}`)
            let token = client.getAuth();
            let response = await axios.get(
                `${API_ENDPOINT}${url}`, 
                {params:params,headers:{'x-token':`Bearer ${token}`}}, 
            )
            return {
                error:false,
                ...response.data,
            }
        }catch(error:any){
            return {
                error:true,
                message:error.toString(),
            }
        }
    },
    post: async(url:string,params:any)=>{
        try{
            let token = client.getAuth();
            let response = await axios.post(
                `${API_ENDPOINT}${url}`, 
                params,
                {headers:{'x-token':`Bearer ${token}`}, 
            })
            return {
                error:false,
                ...response.data,
            }
        }catch(error:any){
            return {
                error:true,
                message:error.toString(),
            }
        }
    },
    upload: async(type:string,blob:any)=>{
        const form:any = new FormData();
        form.append('file',blob);
        form.append('type',type); // banners|products|etc
        try{
            let token = client.getAuth();
            let response = await axios.put(
                `${API_ENDPOINT}/upload`, 
                form,
                {
                    headers:{
                    'x-token':`Bearer ${token}`,
                    'content-type':'multipart/form-data; '
                }
            })
            return {
                error:false,
                ...response.data,
            }
        }catch(error:any){
            return {
                error:true,
                message:error.toString(),
            }
        }
    },
    getAuth:()=>{
        let auth:any = window.localStorage.getItem('auth');
        if(auth){
            auth = JSON.parse(auth);
            return auth.token;
        }
    }
}

export default client;