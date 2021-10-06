import {
    FETCH_PRODUCTS,
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    CREATE_PRODUCT,

  } from '../actiions/types/actionTypes'

const productReducer = (products=[],action)=>{
    switch(action.type){
        case DELETE_PRODUCT:
            return products.filter((product)=>product._id !==action.payload);

        case UPDATE_PRODUCT:
            return products.map((product)=>product._id===action.payload._id?action.payload:product);
        case FETCH_PRODUCTS:
            return action.payload;
        case CREATE_PRODUCT:
        return  [...products,action.payload];
        default:
            return products;
    }
}

export default productReducer