import Register from "./Register";
import Box from "@mui/material/Box";
import { useState } from "react";
import { collection, addDoc } from "firebase/compat/firestore";
import db from "../firebase_setup/firebase";
import "../index.css";

import FirestoreFetch from "../FirstoreFetch";

export default function AdminForm() {
  // const [todo, setTodo] = useState("");
  // const valueArr = [];
  // const addTodo = (e) => {
  //   e.preventDefault();
  //   console.log(valueArr);
  //   valueArr.forEach((element, indexx) => {
  //     try {
  //       const docRef = addDoc(collection(db, "todos"), {
  //         indexx: element,
  //       });
  //       console.log("Document written with ID: ", docRef.id);
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  //   });
  // };

  // let navigate = useNavigate();
  // const logout = () => {
  //   let path = `/`;
  //   navigate(path);
  // };
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const addProduct = (e) => {
    e.preventDefault();
    db.collection("customersData").add({
      name: productTitle,
      Description: productDescription,
      Quantity: productQuantity,
      price: productPrice,
    });

    // setProductTitle("");
    // setProductDescription("");
    // setProductQuantity("");
    // setProductPrice("");
  };

  return (
    <>
      <Box sx={{ width: "15%" }} className="tabs">
        <Register
          field1="Enter Product Title"
          field2="Enter description"
          field3="Enter Quantity"
          field5="Enter Quantity"
          field4="Enter Price"
          field3Type="number"
          field4Type="number"
          BtnText="Add"
          onChangeName={(e) => setProductTitle(e.target.value)}
          onChangeEmail={(e) => setProductDescription(e.target.value)}
          onChangePass={(e) => setProductQuantity(e.target.value)}
          onChangeConfirmPass={(e) => setProductPrice(e.target.value)}
          BtnClick={addProduct}
        />
        <FirestoreFetch />
      </Box>
    </>
  );
}
