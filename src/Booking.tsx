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
    img: singleRoom,
    price: 1500,
  });
  const [dateSet, setdateSet] = useState();

  return (
    <div>
      <Navbar />
      <div className="w-full">
        <p className="font-bold text-lg text-center text-yellow-600">
          Pick from our available rooms!
        </p>
        <ul className=" mt-10 w-full flex  justify-center space-between ">
          {rooms.map((room) => (
            <li
              key={room.id}
              className="p-3 border-2 rounded-xl border-yellow-600 text-yellow-600 mr-10 hover:bg-yellow-600 hover:text-white"
              onClick={() => setRoom({ img: room.img, price: room.price })}
            >
              {room.name}
            </li>
          ))}
        </ul>

        <div className="w-full flex flex-col items-center justify-center p-10">
          <p className="text-lg">P {roomPicked.price} per night</p>
          <img src={roomPicked.img} className="w-2/5 p-10" />
        </div>
      </div>

      <div className="w-full">
        <p className="font-bold text-lg text-center text-yellow-600">
          Package Accomodations
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
