import { AUTH,LOGOUT,FORGOT_PASSWORD,RESET_PASSWORD} from '../actiions/types/actionTypes';

const authReducer =(state ={authData:null},action)=>{
    switch(action.type){
        case AUTH :
            //console.log(action?.data);
            localStorage.setItem('profile',JSON.stringify({...action?.data}))
             return {...state,authData:action?.data};
        case LOGOUT:
            localStorage.clear();
            return {...state,authData:null};
        case FORGOT_PASSWORD:
            return {...state,authData:action?.data}
        case RESET_PASSWORD:
            return {...state,authData:action?.data}
            default:
            return state;
    }
}

export default authReducer;