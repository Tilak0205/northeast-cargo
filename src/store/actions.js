import {LOGIN,LOGOUT} from './actionTypes';

export const login = content => {

    localStorage.setItem("auth", JSON.stringify(content));
    return {
        type:LOGIN,
        payload:{user:content,isLogin: content.token!=null,dashboard:null,init:true }
    }   
}

export const logout = content =>{

    localStorage.removeItem("auth");

    return {
        type:LOGOUT,
        payload:{user:null,isLogin: false,dashboard:null,init:true }
    }
}

/**
 * all types of dashboard
 * content (name,data)
 */
export const dashboard = content =>{
    return {
        type:'dashboard',
        payload:{dashboard:{[content.name]:content.data}}
    }
}
