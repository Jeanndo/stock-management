import * as React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";



// const flw = new Flutterwave(
//   "FLWPUBK-55df03a93d455856da671650fc5f603f-X",
//   "FLWSECK-05bafb2966ede03438a9a435a38444a6-X"
// );

// const initialState = {fullname:'',email:'',amount:Number,phone:Number}
const Pay = () => {

//   const [formData,setFormData]=React.useState(initialState)

// const handlePayement = async(event)=>{
//   event.preventDefault()
//   if(formData.fullname=!''|| formData.email!='',formData.amount!='',formData.phone!=''){
//     try {
//       const payload = {
//         tx_ref: "MC-158523s09v5050e8",         //This is a unique reference, unique to the particular transaction being carried out. It is generated when it is not provided by the merchant for every transaction.
//         order_id: "USS_URG_STOCK"+Date.now(), //Unique ref for the mobilemoney transaction to be provided by the merchant
//         amount: `${formData.amount}`,
//         currency: "RWF",
//         email:`${formData.email}`,
//         phone_number:`${formData.phone}`,
//         fullname:`${formData.fullname}`
//       };
  
//       const response = await flw.MobileMoney.rwanda(payload);
//       console.log(response)
  
//   } catch (error) {
//     console.log(error)
//   }
//   }
// }

// const handleChange = (event)=>{
//  setFormData({...formData,[event.target.name]:event.target.value})
// }

  return (
    <div
      style={{
        padding:'20px',
        width: "300px",
        height: "10vh",
        backgroundColor: "#fff",
        marginLeft: "400px",
        marginTop: "100px",
        borderRadius: "5px",
      }}
    >
      {/* <form onSubmit={handlePayement}>
        <div>
        <input
            type="text"
            placeholder="fullname"
            style={{
              marginBottom: "10px",
              width: "300px",
              height: "30px",
              outline: "none",
              borderStyle: "none",
              borderRadius: "5px",
              textAlign: "center",
            }}
            name="fullname"
            onChange={handleChange}
          />
          </div>
          <div>
          <input
            type="email"
            placeholder="email"
            style={{
              marginBottom: "10px",
              width: "300px",
              height: "30px",
              outline: "none",
              borderStyle: "none",
              borderRadius: "5px",
              textAlign: "center",
            }}
            name="email"
            onChange={handleChange}
          />
          </div>

          <div>
          <input
            type="number"
            placeholder="amout ex: 100"
            style={{
              marginBottom: "10px",
              width: "300px",
              height: "30px",
              outline: "none",
              borderStyle: "none",
              borderRadius: "5px",
              textAlign: "center",
            }}
            name="amount"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Tel: ex:078xxxxx"
            style={{
              marginBottom: "10px",
              width: "300px",
              height: "30px",
              outline: "none",
              borderStyle: "none",
              borderRadius: "5px",
              textAlign: "center",
            }}
            name="phone"
            onChange={handleChange}
          />

        </div>
        <div>
          <Button
           type="submit"
            variant="contained"
            style={{
              backgroundColor: "yellow",
              color: "#000",
              marginLeft: "100px",
            }}
          >
            Pay
          </Button>
        </div>
      </form> */}
       <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
    </div>
  );
};

export default Pay;
