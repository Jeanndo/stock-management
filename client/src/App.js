import React from "react";
import Routes from "./routes/index";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import {getUsers} from './redux/actiions/user'
import {getProducts} from './redux/actiions/product'

const  App =()=>{  

  const dispatch = useDispatch()
  React.useEffect(()=>{
  dispatch(getUsers())
  dispatch(getProducts());
},[dispatch])

    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
export default App;
