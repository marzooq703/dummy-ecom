import React from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import Admin from "./Admin";

const Login = () => {
  return (
    <div className="form login">
      <FormControl className="register-form">
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="email" type="email" className="name" maxlength="10" />
      </FormControl>
      <FormControl className="register-form">
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input id="pass" aria-describedby="my-helper-text" type="password" />
      </FormControl>
      <input type="submit" onClick={Test} className="submit" />
      <FormHelperText id="label" className="red"></FormHelperText>
    </div>
  );
};

const Test = () => {
  let a = document.querySelector("#email").value;
  let b = document.querySelector("#pass").value;

  if (a == null || a == "") {
    document.getElementById("label").textContent = "*Email Must Be Filled Out";
    return false;
  } else if (b == null || b == "") {
    document.getElementById("label").textContent =
      "*Password Must Be Filled Out";
    return false;
  }

  const c = "zee";
  const d = "1234";

  if (a == c && b == d) {
    alert("hello");
  }
};

export default Login;
