import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddUser from "../AddUser/AddUser";

const AddUserModal = ({ handleOpen, open, handleClose }) => {
  return (
    <div style={{marginTop:'-20px'}}>
      <Button onClick={handleOpen} style={{ float: "left" }} variant="outlined">
        <AddBoxIcon
          style={{
            cursor: "pointer",
            float: "left",
            color: "blue",
          }}
        />
        Add new Employee
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddUser handleClose={handleClose} />
      </Modal>
    </div>
  );
};

export default AddUserModal;
