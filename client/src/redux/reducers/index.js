import {combineReducers } from "redux";
import products from './product'
import authReducer from "./auth";

export default combineReducers({products,authReducer})