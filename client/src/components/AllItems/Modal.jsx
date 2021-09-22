import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddItem from '../AddItem/AddItem';


const AddItemModal = ({handleOpen,open,handleClose})=>{
    return (
        <div>
        <Button onClick={handleOpen} style={{float:'left'}} variant="outlined">
            <AddBoxIcon
            style={{
              cursor: "pointer",
              float: "left",
              color: "blue",
            }}
          />
          Add new product
          </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AddItem handleClose={handleClose}/>
        </Modal >
      </div>
    )
}
export default AddItemModal