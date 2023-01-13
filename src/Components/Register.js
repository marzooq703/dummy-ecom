import React from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";

const Register = () => {
  return (
    <div className="form">
      <FormControl className="register-form">
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input id="name" type="text" className="name" maxlength="5" />
      </FormControl>
      <FormControl className="register-form">
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="email" type="email" className="name" maxlength="10" />
      </FormControl>
      <FormControl className="register-form">
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input id="pass" aria-describedby="my-helper-text" type="password" />
      </FormControl>
      <FormControl className="register-form">
        <InputLabel htmlFor="my-input">Confirm Password</InputLabel>
        <Input
          id="confirm-pass"
          aria-describedby="my-helper-text"
          type="password"
        />
      </FormControl>
      <input type="submit" onClick={Test} className="submit" />
      <FormHelperText id="label" className="red"></FormHelperText>
    </div>
  );
};

const Test = () => {
  let a = document.querySelector("#email").value;
  let b = document.querySelector("#pass").value;
  let c = document.querySelector("#confirm-pass").value;
  let d = document.querySelector("#name").value;

  if (a == null || a == "") {
    document.getElementById("label").textContent = "*Email Must Be Filled Out";
    return false;
  } else if (b == null || b == "") {
    document.getElementById("label").textContent =
      "*Password Must Be Filled Out";
    return false;
  } else if (c == null || c == "") {
    document.getElementById("label").textContent =
      "*Password Must Be Filled Out";
    return false;
  } else if (b != c) {
    document.getElementById("label").textContent = "*Passwords Does Not Match";
    return false;
  } else if (d == null || d == "") {
    document.getElementById("label").textContent = "*Name Must Be Filled Out";
    return false;
  } else if (a > 5) {
    alert("hello");
  } else {
    let e = document.getElementById("label");
    e.textContent = "Successfully Registered";
    e.classList.remove("red");
    e.style.color = "green";
  }
};

export default Register;
