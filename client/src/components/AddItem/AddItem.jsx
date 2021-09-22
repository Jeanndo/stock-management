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
        <h2 className={classes.addNewProduct}>Add New Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          className={classes.ProductName}
        />
        <input
          type="text"
          placeholder="Quantity"
          className={classes.Quantity}
        />
        <input type="text" placeholder="From" className={classes.From} />
        <input type="text" placeholder="Owner" className={classes.Owner} />
        <input
          type="number"
          placeholder="Owner Phone Number"
          className={classes.Phone}
        />
        <input type="number" placeholder="Price" className={classes.Price} />
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
