import React, { useState } from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../Contexts/ThemeContext.jsx";

function Layout() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}
export default Layout;
