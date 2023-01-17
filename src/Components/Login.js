import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

function getLoginValues() {
  const storedValues = localStorage.getItem("Login");
  if (!storedValues)
    return {
      email: "",
      password: "",
    };
  return JSON.parse(storedValues);
}

const Login = () => {
  let navigate = useNavigate();

  //persisting form values
  const [initialValues, setInitialValues] = useState(getLoginValues);
  const [formValues, setFormValues] = useState([]);

  useEffect(() => {
    localStorage.setItem("Login", JSON.stringify(initialValues), [formValues]);
  });

  console.log(initialValues);

  const submitForm = () => {
    let a = document.querySelector("#email").value;
    let b = document.querySelector("#pass").value;

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const c = "mahyan@gmail.com";
    const d = "12345";

    //Props can be used to add items in product using admin

    if (a == null || a == "") {
      document.getElementById("label").textContent =
        "*Email Must Be Filled Out";
      return false;
    } else if (b == null || b == "") {
      document.getElementById("label").textContent =
        "*Password Must Be Filled Out";
      return false;
    } else if (!a.match(validRegex)) {
      document.getElementById("label").textContent = "*Invalid Email";
      return false;
    }
    if (a == c && b == d) {
      let path = `/123`;
      navigate(path);
    } else {
      document.getElementById("label").textContent =
        "*Incorrect Login Credentials";
    }
    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
  };

  return (
    <LoginForm
      email="Enter Email Address"
      onChangeEmail={(e) =>
        setInitialValues({ ...initialValues, email: e.target.value })
      }
      password="Enter Password"
      onChangePass={(e) =>
        setInitialValues({ ...initialValues, password: e.target.value })
      }
      onsubmit={submitForm}
    />
  );
};

export default Login;
