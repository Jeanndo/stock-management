import {
  FETCH_PRODUCTS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  CREATE_PRODUCT,
 
} from '../actiions/types/actionTypes'

import * as api from '../../api'

export const  getProducts=  ()=>async(dispatch)=>{

    try {
       const {data} = await api.fetchProducts(); 
       console.log("Data:",data)
       dispatch({type:FETCH_PRODUCTS,payload:data});

    } catch (error) {
        console.log(error.message);
    }
}

export const createProduct = (product)=>async(dispatch)=>{

    try {
    
      const {data} = await api.createProduct(product);  
      console.log("data",data)
      dispatch({type:CREATE_PRODUCT,payload:data})
    
    } catch (error) {
        console.log(error.message);
    }
}

export const updateProduct = (id,product)=>async (dispatch)=>{

    try {
        
    const {data} = await api.updateProduct(id,product)
    dispatch({type:UPDATE_PRODUCT,payload:data});
  
    } catch (error) {
        console.log(error.message);
    }
  }

  export const deleteProduct = (id)=> async (dispatch)=>{

    try {
      await api.deleteProduct(id)
  
      dispatch({type:DELETE_PRODUCT,payload:id});
    } catch (error) {
      console.log(error);
    }
  }

export const approveProduct = (id,formData)=>async(dispatch)=>{
    try {
        const {data} = await api.approveProduct(id,formData)
        dispatch({type:UPDATE_PRODUCT,payload:data});
    } catch (error) {
        console.log(error.message); 
    }
}