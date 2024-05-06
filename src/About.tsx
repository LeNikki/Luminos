import hotelStaff from "./assets/hotelStaff.png";
import Navbar from "./Components/Navbar";
export default function About() {
  return (
    <div>
      <Navbar />

      <img src={hotelStaff} />
    </div>
  );
}
