import {APPROVE_EMAIL} from './types/actionTypes'
import * as api from '../../api'

export const approveProduct = (formData)=>async(dispatch)=>{
    try {
        await api.approveEmail(formData)
        dispatch({type:APPROVE_EMAIL,payload:formData});
    } catch (error) {
        console.log(error.message); 
    }
    
}