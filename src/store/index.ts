// Store
import { createStore } from "redux";

// initial store
type user = {
    token:string|null,
    id:string|null,
    email:string|null,
    role:string|null,
    name:string|null
}

type initState = {
    init:boolean, // first time loading 
    isLogin:boolean,
    user:user|null,
    dashboard:any // dashboard data (last 24 h data or some other)
}

const initialState:initState = {
    init:false,
    isLogin:false,
    user:{token:null,id:null,email:null,role:null,name:null},
    dashboard:{}
}

const reducer = (state:initState = initialState, action:any) =>{
    let payload = action.payload;
    
    return {...state,...payload};
    /*switch(action.type){
        case LOGIN:{
            return {
                ...state
            }
        }
        case LOGOUT:{
            return {
                ...state
            }
        }
        default:
            return state;
    }*/
}


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__;
    }
}
// create store from reducer
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());