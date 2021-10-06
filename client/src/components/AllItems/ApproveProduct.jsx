import React from "react";
import { TextField, Button } from "@mui/material";
import {approveProduct} from '../../redux/actiions/ApproveEmail';
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'

const ApproveProduct = () => {
  
  const dispatch = useDispatch()
  const history = useHistory()
  const [formData, setFormData] = React.useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleApprove = (event) => {
   event.preventDefault()
    dispatch(approveProduct(formData,history))
  };
  console.log("formData:",formData)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        marginTop: "100px",
        height: "55vh",
        textAligin: "center",
        padding: "20px",
        width:'400px',
        marginLeft:'600px',
        borderRadius:'5px'
      }}
    >
      <form onSubmit={handleApprove}>
        <div>
          <TextField
            style={{marginBottom: "5px"}}
            type="email"
            name="email"
            fullWidth
            placeholder="Email"
            value={formData.email}
            onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
            }
          />
        </div>
        <div>
          <TextField
            fullWidth
            placeholder="Subject"
            style={{ marginBottom: "5px" }}
            type="text"
            name="subject"
            value={formData.subject}
            onChange={(event) =>
              setFormData({ ...formData, subject: event.target.value })
            }
          />
        </div>
        <div>
          <TextField
            fullWidth
            placeholder="Message"
            style={{ marginBottom: "5px" }}
            type="text"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={(event) =>
              setFormData({ ...formData, message: event.target.value })
            }
          />
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
          >
            Approve
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ApproveProduct;
