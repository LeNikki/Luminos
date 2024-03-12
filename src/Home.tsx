import React from "react";
import Navbar from "./Components/Navbar";
import Showcase from "./Components/Showcase";
import hotelHero from "./assets/hotelHero.png";
import HeroSection from "./Components/HeroSection";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title  font-bold text-4xl flex justify-center items-center pt-80">
            Welcome To Luminos Hotel
          </h1>
          <p className="text-center text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequ
          </p>
          <div className="w-full flex justify-center items-center text-white mt-10">
            <section className="w-1/2 flex flex-row justify-between items-center">
              <section>
                <label htmlFor="arrival">Arrival Date: </label>
                <input
                  type="date"
                  id="arrival"
                  className="text-slate-600 p-1 rounded-lg"
                  placeholder="Arrival Dat"
                />
              </section>
              <section>
                <label htmlFor="departure">Departure Date: </label>
                <input
                  type="date"
                  id="departure"
                  className="text-slate-600 p-1 rounded-lg"
                  placeholder="Departure Date"
                />
              </section>
              <button className="text-black hover:before:bg-redborder-yellow-600 relative rounded-lg p-3 w-44 overflow-hidden border border-yellow-600 bg-white px-3 text-yellow-600 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-600 before:transition-all before:duration-500 hover:text-white hover:shadow-yellow-600 hover:before:left-0 hover:before:w-full">
                <span className="relative z-10">Book Now !</span>
              </button>
            </section>
          </div>
        </div>
      </div>

      <Showcase />
      <Testimonials />
      <Footer />
    </div>
  );
}
