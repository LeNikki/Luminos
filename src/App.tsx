import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Booking from "./Booking";
import Tutorial from "./Tutorial";
import Login from "./Login";
import Billing from "./Billing";
import { RegisterForm } from "./Register";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
