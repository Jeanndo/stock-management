import * as React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {paidProduct} from '../../redux/actiions/product'
import { useDispatch } from "react-redux";


const Pay = ({productId}) => {

  const dispatch = useDispatch()

  const handlePaid = ()=>{
    dispatch(paidProduct(productId))
  }
 console.log("id",productId)
  return (
    <div
      style={{
        padding: "20px",
        width: "300px",
        height: "30vh",
        backgroundColor: "#fff",
        marginLeft: "400px",
        marginTop: "100px",
        borderRadius: "5px",
      }}
    >
      <PayPalScriptProvider options={{ "client-id": "test" }}>
        <PayPalButtons style={{ layout: "horizontal" }} onClick={handlePaid}/>
      </PayPalScriptProvider>
      <div>        
        <h4>Names:jeanndo</h4>
    </div>
    <div>        
        <h4>Paypal Account :1234567</h4>
    </div>
    </div>
  );
};

export default Pay;
