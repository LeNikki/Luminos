import hotelStaff from "./assets/hotelStaff.png";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";
export default function About() {
  const [backend, setbackend] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => setbackend(data.message));
  }, []);

  return (
    <div>
      <Navbar />
      <p>{backend}</p>
      <img src={hotelStaff} />
    </div>
  );
}
