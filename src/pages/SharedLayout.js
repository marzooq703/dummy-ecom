import React from "react";
import { Outlet } from "react-router-dom";
import Navbarr from "../Components/Navbar";
const SharedLayout = () => {
  return (
    <>
      <Navbarr />
      <Outlet />
    </>
  );
};

export default SharedLayout;
