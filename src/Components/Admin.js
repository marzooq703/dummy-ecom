import Register from "./Register";
import Box from "@mui/material/Box";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase_setup/firebase";
import "../index.css";
import { useNavigate } from "react-router-dom";

export default function AdminForm() {
  const [todo, setTodo] = useState("");
  const valueArr = [];
  const addTodo = (e) => {
    e.preventDefault();
    console.log(valueArr);
    valueArr.forEach((element, indexx) => {
      try {
        const docRef = addDoc(collection(db, "todos"), {
          indexx: element,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    });
  };

  let navigate = useNavigate();
  const logout = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <Box sx={{ width: "15%" }} className="tabs">
      <Register
        field1="Enter Product Title"
        field2="Enter description"
        field3="Enter Quantity"
        field4="Enter Price"
        field3Type="number"
        field4Type="number"
        BtnText="Add"
        onChange={(e) => valueArr.push(e.target.value)}
        BtnClick={addTodo}
      />
      <button type="submit" onClick={logout} className="submit logout">
        Logout
      </button>
    </Box>
  );
}
