import { AUTH } from "../actiions/types/actionTypes";

import * as api from "../../api/index";

export const signin = (formData, history) => async (dispatch) => {
  try {
    //login the user
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    console.log(data?.result?.name);
    if (
      data?.result?.role === "agent" ||
      data?.result?.role === "AGENT"
    ) {
      history.push("/dashboard");

    } 
    else if (
      data?.result?.role === "cashier" ||
      data?.result?.role === "CASHIER"
    ) {
      history.push("/dashboard");
    }
    else if (
      data?.result?.role === "admin" ||
      data?.result?.role === "ADMIN"
    ) {
      history.push("/dashboard");
    } else if (
      data?.result?.role === "client" ||
      data?.result?.role === "CLIENT"
    ) {
      history.push("/homepage");
    }
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    //signup the user
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    if (data?.result?.role === "agent") {
      history.push("/dashboard");
    } else if (
      data?.result?.role === "admin" ||
      data?.result?.role === "ADMIN"
    ) {
      history.push("/dashboard");
    }else if(data?.result?.role === "cashier"){
      history.push("/dashboard");
    }else if (
      data?.result?.role === "client" ||
      data?.result?.role === "CLIENT"
    ) {
      history.push("/homepage");
    }
  } catch (error) {
    console.log(error);
  }
};
