import React from "react";
import ReactToPrint from "react-to-print";
import Report from "./report";
import {Button} from "@mui/material";

class ComponentToPrint extends React.Component {
  render() {
    return <Report/>;
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <Button variant="outlined" color="primary"style={{ cursor: "pointer",marginTop:'14px',marginBottom:'14px',marginLeft:'15%'}}>Print this out!</Button>
          )}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;