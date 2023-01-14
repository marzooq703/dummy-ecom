import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Register from "../Components/Register";
import Login from "../Components/Login";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "15%" }} className="tabs">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Register" {...a11yProps(0)} />
          <Tab label="Login" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Register
          field1="Enter Name"
          field2="Email Address"
          field3="Enter new Password"
          field4="Confirm password"
          field3Type="password"
          field4Type="password"
          BtnText="Submit"
          BtnClick={Test}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Login />
      </TabPanel>
    </Box>
  );
}
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
