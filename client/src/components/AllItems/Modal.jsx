import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ApproveProduct from "./ApproveProduct";
import VerifiedIcon from '@mui/icons-material/Verified';

const ApproveModal = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{ float: "left" }} variant="outlined">
        <VerifiedIcon
          style={{
            cursor: "pointer",
            float: "left",
            color: "blue",
          }}
        />
        Approve
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ApproveProduct handleClose={handleClose}/>
      </Modal>
    </div>
  );
};
export default ApproveModal;
