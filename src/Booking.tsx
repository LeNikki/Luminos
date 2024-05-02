import { useState } from "react";
import Navbar from "./Components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { formatDate } from "./Components/formatDate";
import { bookedRooms } from "./Components/BookedRooms";
import { rooms } from "./RoomsAvailable";
import singleRoom from "./assets/singleRoom.png";
export default function Booking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { arrivalDate, departureDate } = location.state;

  const [roomPicked, setRoom] = useState({
    id: 0,
    num: 0,
    roomType: "Please select a room",
    img: singleRoom,
    price: 1500,
    arrivalDate: "",
    departureDate: "",
    available: 0,
  });

  const formattedArrivalDate = formatDate(arrivalDate);
  const formattedDepartureDate = formatDate(departureDate);

  const bookThisRoom = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const existing = bookedRooms.find(
      (room) =>
        room.roomType === roomPicked.roomType &&
        room.arrivalDate === roomPicked.arrivalDate &&
        room.departureDate === roomPicked.departureDate
    );
    if (existing) {
      alert("Booking already exists");
    } else if (roomPicked.available == 0) {
      alert("Sorry, this type of room is currently fully booked.");
    } else {
      const updatedAvailableRoom = roomPicked.available - 1;
      const roomIndex = rooms.findIndex((room) => room.num === roomPicked.num);
      if (roomIndex !== -1) {
        console.log("Found Room at Index:", roomIndex);
        rooms[roomIndex].available = updatedAvailableRoom;
        console.log("Updated Room:", rooms[roomIndex]);
      }
      bookedRooms.push(roomPicked);
      navigate("/billing", {
        state: { roomPicked, arrivalDate, departureDate },
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-full md:pt-10">
        <p className="font-extrabold text-xl text-center text-yellow-600">
          Pick from our available rooms!
        </p>
        <span className="w-full flex flex-row space-between justify-center mt-10">
          <section className="font-bold mr-10 p-3 rounded-md text-yellow-600 flex">
            <i className="fa-solid fa-plane-arrival mr-2"></i> Arrival Date:{" "}
            <p className="text-black ml-2 ">{formattedArrivalDate}</p>
          </section>
          <section className="font-bold p-3 rounded-md text-yellow-600 flex">
            <i className="fa-solid fa-plane-departure mr-2"></i>
            Departure Date:{" "}
            <p className="text-black ml-2 ">{formattedDepartureDate}</p>
          </section>
        </span>
        <ul className=" mt-10 w-full flex  justify-center space-between ">
          {rooms.map((room) => (
            <li
              key={room.num}
              className="p-3 border-2 rounded-xl border-yellow-600 text-yellow-600 mr-10 hover:bg-yellow-600 hover:text-white"
              onClick={() =>
                setRoom({
                  id: Math.random(),
                  num: room.num,
                  img: room.img,
                  price: room.price,
                  roomType: room.name,
                  arrivalDate: formattedArrivalDate,
                  departureDate: formattedDepartureDate,
                  available: room.available,
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
            <p className="font-bold text-yellow-600">
              Available rooms: {roomPicked.available}
            </p>

            <button
              onClick={bookThisRoom}
              className="mt-5  h-12 hover:before:bg-redborder-yellow-600 relative w-44 overflow-hidden border border-yellow-600 bg-white text-yellow-600 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-0 before:bg-yellow-600 before:transition-all before:duration-500 hover:text-white hover:shadow-yellow-600 hover:before:left-0 hover:before:w-full"
            >
              <span className="relative z-10">
                <i className="fa-solid fa-bookmark mr-2"></i> Book this room
              </span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
