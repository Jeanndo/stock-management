import {combineReducers } from "redux";
import products from './product';
import authReducer from "./auth";
import users from './user';

export default combineReducers({products,authReducer,users})