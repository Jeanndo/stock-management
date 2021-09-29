import React,{useState,useEffect}from 'react'
import { useStyles } from "./styles";
import { Button } from "@mui/material";
import { useDispatch,useSelector } from 'react-redux';
import {createProduct,updateProduct} from '../../redux/actiions/product';



const AddItem = ({currentId,setCurrentId}) => {

  const classes = useStyles();
  const dispatch = useDispatch();

  //const product =useSelector((state)=>state.products)

  const product = useSelector((state)=>currentId?state.products.find((p)=>p._id===currentId):null);

  const[addProduct,setAddProduct] = useState({productName:'',quantity:'',from:'',owner:'',phone:'',price:''})
 
  const handleSubmit = (event) => {
    event.preventDefault();

    if(currentId){
      dispatch(updateProduct(currentId,addProduct))
     }else{
       dispatch(createProduct(addProduct))
     }
     Clear()
  };

useEffect(()=>{
  if(product)setAddProduct(product)
},[product])

  const Clear = ()=>{
    setCurrentId(null);

    setAddProduct({productName:'',quantity:'',from:'',owner:'',phone:'',price:''});
  
}

  return (
    <div className={classes.additemContainer}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          className={classes.ProductName}
          value={addProduct.productName}
          onChange={(event)=>setAddProduct({...addProduct,productName:event.target.value})}
        />
        <input
          type="number"
          placeholder="Quantity"
          className={classes.Quantity}
          value={addProduct.quantity}
          onChange={(event)=>setAddProduct({...addProduct,quantity:event.target.value})}
        />
        <input 
        type="text" 
        placeholder="From"
        className={classes.From} 
        value={addProduct.from}
        onChange={(event)=>setAddProduct({...addProduct,from:event.target.value})}
        />
        <input 
        type="text" 
        placeholder="Owner" 
        className={classes.Owner} 
        value={addProduct.owner}
        onChange={(event)=>setAddProduct({...addProduct,owner:event.target.value})}
        />
        <input
          type="number"
          placeholder="Owner Phone Number"
          className={classes.Phone}
          value={addProduct.phone}
          onChange={(event)=>setAddProduct({...addProduct,phone:event.target.value})}
        />
        <input
         type="number" 
         placeholder="Price" 
         className={classes.Price} 
         value={addProduct.price}
         onChange={(event)=>setAddProduct({...addProduct,price:event.target.value})}
         />
         <div style={{textAlign:'center',padding:'5px'}}>
        <Button
          variant="contained"
          type="submit"
          className={classes.AddBtn}
        >
          Add
        </Button>
        </div>
      </form>
    </div>
  );
};

export default AddItem
