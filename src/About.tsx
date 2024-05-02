import hotelStaff from "./assets/hotelStaff.png";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from "react";
export default function About() {
  const [backend, setbackend] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setbackend(data));
  }, []);

  return (
    <div>
      <Navbar />
      {backend.map((user) => (
        <p>{user.name}</p>
      ))}
      <img src={hotelStaff} />
    </div>
  );
}
