import * as React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Pay = () => {
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
        <PayPalButtons style={{ layout: "horizontal" }} />
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
