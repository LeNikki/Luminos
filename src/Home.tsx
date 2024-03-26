import Navbar from "./Components/Navbar";
import Showcase from "./Components/Showcase";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

interface DateInputErrors {
  arrivalError: string;
  departureError: string;
}
export default function Home() {
  const [arrivalDate, setArrivalDate] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>("");
  const [errors, setErrors] = useState<DateInputErrors>({
    arrivalError: "",
    departureError: "",
  });
  const navigate = useNavigate();
  const validateDates = (arrival: string, departure: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const arrivalDate = new Date(arrival);
    const departureDate = new Date(departure);

    const arrivalError = arrival === "" ? "Arrival date is required" : "";
    const departureError = departure === "" ? "Departure date is required" : "";

    if (arrivalDate < today) {
      setErrors({
        arrivalError: "Arrival date cannot be earlier than the current date",
        departureError: "",
      });
    } else if (arrivalDate > departureDate) {
      setErrors({
        arrivalError: "Arrival date cannot be later than departure date",
        departureError: "",
      });
    } else {
      setErrors({
        arrivalError: arrivalError,
        departureError: departureError,
      });
    }
  };
  const bookNow = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!errors.arrivalError && !errors.departureError) {
      if (arrivalDate != "" || departureDate != "") {
        alert(
          "Arrival Date: " +
            typeof arrivalDate +
            "\n Departure Date: " +
            departureDate
        );
        navigate("/booking", { state: { arrivalDate, departureDate } });
      } else {
        alert("Please enter a valid date");
      }
    } else {
      alert("Booking Failed. Please provide appropriate dates.");
    }
  };

  const handleArrivalChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setArrivalDate(value);
    validateDates(value, departureDate);
  };
  const handleDepartureChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDepartureDate(value);
    validateDates(arrivalDate, value);
  };
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title font-bold  text-center text-4xl flex justify-center items-center pt-14 md:pt-80">
            Welcome To Luminos Hotel
          </h1>
          <p className="text-center text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequ
          </p>
          <div className="w-full flex flex-col md:flex-row justify-center items-center mt-10">
            <div className="w-3/4 p-2 md:p-5  flex-col md:flex-row bg-slate-100/75 flex justify-center items-center ">
              <section className="  flex flex-col md:flex-row md:justify-between items-center">
                <section className="flex flex-col md:flex-row items-center mr-0 first:md:mr-10">
                  <label htmlFor="arrival">Arrival Date: </label>
                  <input
                    type="date"
                    id="arrival"
                    value={arrivalDate}
                    onChange={handleArrivalChange}
                    className="text-slate-600 p-1"
                    placeholder="Arrival Date"
                  />
                </section>
                <section className="flex flex-col md:flex-row items-center mr-0 md:mr-10">
                  <label htmlFor="departure">Departure Date: </label>
                  <input
                    type="date"
                    id="departure"
                    value={departureDate}
                    onChange={handleDepartureChange}
                    className="text-slate-600 p-1"
                    placeholder="Departure Date"
                  />
                </section>
              </section>

              <button
                onClick={bookNow}
                className=" mt-10 md:mt-0 ml-0 md:ml-5 h-10 text-black hover:before:bg-redborder-yellow-600 relative w-44 overflow-hidden border border-yellow-600 bg-white text-yellow-600 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-0 before:bg-yellow-600 before:transition-all before:duration-500 hover:text-white hover:shadow-yellow-600 hover:before:left-0 hover:before:w-full"
              >
                <span className="relative z-10">Book Now</span>
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            {errors.departureError ? (
              <div className="text-white mt-2 bg-red-600/75 p-2 rounded-md">
                <i className="fa-solid fa-circle-exclamation"></i>{" "}
                {errors.departureError}{" "}
              </div>
            ) : (
              ""
            )}
            {errors.arrivalError ? (
              <div className="text-white mt-2 bg-red-600/75 p-2 rounded-md">
                <i className="fa-solid fa-circle-exclamation"></i>
                {errors.arrivalError}{" "}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <Showcase />
      <Testimonials />
      <Footer />
    </div>
  );
}
