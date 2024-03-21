import React from "react";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import deluxeSuite from "./assets/deluxeSuite.png";
import juniorSuite from "./assets/juniorSuite.png";
import singleRoom from "./assets/singleRoom.png";
import standardRoom from "./assets/standardRoom.png";
import doubleRoom from "./assets/doubleRoom.png";
import bodyMassage from "./assets/bodyMassage.jpg";
import breakfast from "./assets/breakfast.jpg";
import casino from "./assets/casino.jpg";
import hairSalon from "./assets/hairSalon.jpg";
import nailSalon from "./assets/nailSalon.jpg";
import { useLocation } from "react-router-dom";

export default function Booking() {
  const rooms = [
    { id: 1, name: "Single Room", img: singleRoom, price: 1500 },
    { id: 2, name: "Double Room", img: doubleRoom, price: 2600 },
    { id: 3, name: "Standard Room", img: standardRoom, price: 4500 },
    { id: 4, name: "Junior Suites", img: juniorSuite, price: 7000 },
    { id: 5, name: "Deluxe Room", img: deluxeSuite, price: 9600 },
  ];

  const freeAccomodations = [
    { id: 1, accom: "Free Breakfast", img: breakfast },
    { id: 2, accom: "Free Hair Salon", img: hairSalon },
    { id: 3, accom: "Free Massage", img: bodyMassage },
    { id: 4, accom: "Free 300 Casino Tokens", img: casino },
    { id: 4, accom: "Free Nail Salon", img: nailSalon },
  ];
  const [roomPicked, setRoom] = useState({
    roomType: "Single Room",
    img: singleRoom,
    price: 1500,
  });
  const [dateSet, setdateSet] = useState();
  const location = useLocation();
  const { arrivalDate, departureDate } = location.state;
  console.log(arrivalDate);
  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-");
    const date = new Date(`${year}-${month}-${day}`);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthName = monthNames[date.getMonth()];
    const formattedDate = `${monthName} ${day.padStart(2, "0")}, ${year}`;
    return formattedDate;
  };

  const formattedArrivalDate = formatDate(arrivalDate);
  console.log(formattedArrivalDate);
  const formattedDepartureDate = formatDate(departureDate);
  console.log(formattedDepartureDate);
  return (
    <div>
      <Navbar />
      <div className="w-full">
        <p className="font-extrabold text-xl text-center text-yellow-600">
          Pick from our available rooms!
        </p>
        <span className="w-full flex flex-row space-between justify-center mt-10">
          <p className="font-bold mr-10 p-3 rounded-md text-yellow-600 flex">
            <i className="fa-solid fa-plane-arrival mr-2"></i> Arrival Date:{" "}
            <p className="text-black ml-2 ">{formattedArrivalDate}</p>
          </p>
          <p className="font-bold p-3 rounded-md text-yellow-600 flex">
            <i className="fa-solid fa-plane-departure mr-2"></i>
            Departure Date:{" "}
            <p className="text-black ml-2 ">{formattedDepartureDate}</p>
          </p>
        </span>
        <ul className=" mt-10 w-full flex  justify-center space-between ">
          {rooms.map((room) => (
            <li
              key={room.id}
              className="p-3 border-2 rounded-xl border-yellow-600 text-yellow-600 mr-10 hover:bg-yellow-600 hover:text-white"
              onClick={() =>
                setRoom({
                  img: room.img,
                  price: room.price,
                  roomType: room.name,
                })
              }
            >
              {room.name}
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-row p-10">
          <img src={roomPicked.img} className="w-1/2 p-10" />
          <span className="w-1/2 flex flex-col p-10">
            <h2 className="font-bold text-2xl mb-5 text-yellow-600">
              {roomPicked.roomType}
            </h2>
            <p className="text-lg text-red-600 mb-5">
              P {roomPicked.price} per night
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vehicula lectus a metus sagittis, non faucibus eros ultricies.
              Nulla facilisi. Nulla facilisi. Integer varius suscipit lacus, sed
              ultricies purus vehicula vel. Mauris eleifend vel enim ac dapibus.
              Fusce auctor lectus eu mauris ele
            </p>
            <button className="mt-5  h-12 text-black hover:before:bg-redborder-yellow-600 relative w-44 overflow-hidden border border-yellow-600 bg-white text-yellow-600 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-0 before:bg-yellow-600 before:transition-all before:duration-500 hover:text-white hover:shadow-yellow-600 hover:before:left-0 hover:before:w-full">
              <span className="relative z-10">
                <i className="fa-solid fa-bookmark mr-2"></i> Book this room
              </span>
            </button>
          </span>
        </div>
      </div>

      <div className="w-full">
        <p className="font-bold text-lg text-center text-yellow-600">
          Extra Packages
          <div className="w-full flex flex-row justify-around pt-10">
            {freeAccomodations.map((accom) => (
              <section
                key={accom.id}
                className="m-5 p-10 shadow-sm shadow-slate-600 rounded-xl hover:bg-yellow-600 hover:text-white"
              >
                {accom.accom}
                <img src={accom.img} className="w-44" />
              </section>
            ))}
          </div>
        </p>
      </div>

      <div>
        <input
          type="date"
          value={dateSet}
          onChange={(event) => setdateSet(event.target.value)}
        />
      </div>
    </div>
  );
}
