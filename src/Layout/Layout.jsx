import React, { useState } from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  const [Dark, setDark] = useState(JSON.parse(localStorage.getItem('theme')));
  const body = document.querySelector("body");
  if (Dark) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
  return (
    <>
      <Header theme={[Dark, setDark]} />
      <Outlet context={[Dark, setDark]}/>
    </>
  );
}
export default Layout;
