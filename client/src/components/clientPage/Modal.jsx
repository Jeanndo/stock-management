import * as React from 'react'
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Pay from './pay'

const PayModal = ({productId}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{float:'right'}}>
      <Button onClick={handleOpen} style={{ float: "left" }} variant="outlined">
        Pay 
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Pay handleClose={handleClose} productId={productId}/>
      </Modal>
    </div>
  );
};

export default PayModal;
