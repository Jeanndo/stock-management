import { useStyles } from "./styles";
import { Button } from "@mui/material";

const AddItem = ({handleClose}) => {
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.additemContainer}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2 className={classes.addNewProduct}>Add New User</h2>
        <input
          type="text"
          placeholder="First Name"
          className={classes.ProductName}
        />
        <input
          type="text"
          placeholder="Last Name"
          className={classes.Quantity}
        />
        <input
          type="number"
          placeholder="Phone"
          className={classes.Phone}
        />
        <input type="text" placeholder="Role" className={classes.Price} />
        <Button
          variant="outlined"
          color="primary"
          className={classes.CancelBtn}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          className={classes.AddBtn}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddItem;
