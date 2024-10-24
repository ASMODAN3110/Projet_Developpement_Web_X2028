import { useState } from 'react'
import './App.css'
import React from "react";
import Header from "../PageClient/Header";
import MenuSection from "./MenuSection";
import Footer from "../PageClient/Footer";

function Menu2() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Header />
      <MenuSection />
      <Footer />
    </div>
  );
}

export default Menu2;