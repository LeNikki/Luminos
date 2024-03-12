import React from "react";
import Navbar from "./Components/Navbar";
import hotelStaff from "./assets/hotelStaff.png";
export default function About() {
  return (
    <div>
      <Navbar />

      <img src={hotelStaff} />
    </div>
  );
}
