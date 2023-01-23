import Register from "./Register";
import Box from "@mui/material/Box";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { storage } from "../firebase_setup/firebase";
import db from "../firebase_setup/firebase";
import { ref, uploadBytes } from "@firebase/storage";

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

  const [image, setImage] = useState("");
  const [Url, setUrl] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const upload = () => {
    if (image == null) return;
    setUrl("Getting Download Link...");
    const addProduct = (e) => {
      e.preventDefault();
      db.collection("customersData").add({
        name: productTitle,
        Description: productDescription,
        Quantity: productQuantity,
        price: productPrice,
      });

      // Sending File to Firebase Storage
      storage
        .ref(`/images/${image.name}`)
        .put(image)
        .on("state_changed", alert("success"), alert, () => {
          // Getting Download Link
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
            });
        });
    };

    return (
      <Box sx={{ width: "15%" }} className="tabs">
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        ></input>
        <Register
          field1="Enter Product Title"
          field2="Enter description"
          field3="Enter Quantity"
          field4="Enter Price"
          field3Type="number"
          field4Type="number"
          BtnText="Add"
          onChangeName={(e) => setProductTitle(e.target.value)}
          onChangeEmail={(e) => setProductDescription(e.target.value)}
          onChangePass={(e) => setProductQuantity(e.target.value)}
          onChangeConfirmPass={(e) => setProductPrice(e.target.value)}
          BtnClick={upload}
        />
        <img src={Url} alt="productImage tag" />
      </Box>
    );
  };
}
