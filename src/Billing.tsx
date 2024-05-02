import Navbar from "./Components/Navbar";
import { Room, bookedRooms } from "./Components/BookedRooms";
import { rooms } from "./RoomsAvailable";
import { useState, useEffect } from "react";
import Checkout from "./Components/Checkout";

const Billing = () => {
  const [reservedRooms, setReservedRooms] = useState<Room[]>(bookedRooms);
  const [edit, setEdit] = useState(false);
  const [checkedrooms, setCheckedrooms] = useState<Room[]>([]);
  const [totalBill, setTotalBill] = useState(0);
  const [checkout, setCheckout] = useState(false);

  const computeTotal = () => {
    const sum = bookedRooms.reduce((acc, room) => {
      return acc + room.price;
    }, 0);
    setTotalBill(sum);
  };

  useEffect(() => {
    computeTotal();
  }, []);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const room: Room = JSON.parse(value); // Parse the string back to Room object

    if (checked) {
      setCheckedrooms((prevrooms: Room[]) => [...prevrooms, room]);
    } else {
      setCheckedrooms((prevrooms: Room[]) =>
        prevrooms.filter((item) => item.id !== room.id)
      );
    }
  };

  const deleteRooms = () => {
    const deleteFinal = confirm(
      "Are you sure you want to remove item/s from the list?"
    );
    if (deleteFinal) {
      const updatedRooms = bookedRooms.filter(
        (room) =>
          !checkedrooms.some((checkedRoom) => checkedRoom.id === room.id)
      );
      // Restore available rooms in the rooms array
      checkedrooms.forEach((checkedRoom) => {
        const roomIndex = rooms.findIndex(
          (room) => room.num === checkedRoom.number
        );
        if (roomIndex !== -1) {
          rooms[roomIndex].available += 1;
        }
      });
      bookedRooms.length = 0;
      bookedRooms.push(...updatedRooms);
      setReservedRooms(updatedRooms);
      computeTotal();
    }
  };

  const openModal = () => {
    const modal = document.getElementById("my_modal_2");
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div>
      <Navbar />
      <h1 className="p-10">Welcome username!</h1>
      <hr></hr>
      <div className="p-10 w-full">
        <section className="flex flex-row justify-between items-center">
          <h3 className="font-bold">Bookings</h3>
          <p className="text-blue-500" onClick={() => setEdit(!edit)}>
            {edit ? "Cancel" : "Edit"}
          </p>
        </section>
        <table className="w-full">
          <thead>
            <tr className="mt-10 border-2 ">
              <th>Date</th>
              <th>Room</th>
              <th>Billing</th>
            </tr>
          </thead>
          <tbody>
            {reservedRooms.map((room) => (
              <tr key={room.id}>
                <td>
                  {room.arrivalDate} - {room.departureDate}
                </td>
                <td className="flex flex-row">
                  <img
                    className="w-24 mr-10"
                    src={room.img}
                    alt={room.roomType}
                  />
                  <p>{room.roomType}</p>
                </td>
                <td>${room.price}</td>
                <td>
                  {edit && (
                    <input
                      type="checkbox"
                      value={JSON.stringify(room)}
                      onChange={handleCheckboxChange}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {edit && (
          <button
            onClick={deleteRooms}
            className="bg-red-500 text-white p-2 w-44 float-right"
          >
            Delete
          </button>
        )}
      </div>
      <div className="p-10 flex justify-between">
        <p>Total Bill</p>
        <p className="text-red-500 font-bold">${totalBill}</p>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <div className="w-full flex justify-center">
        <button className=" mt-10 md:mt-0 ml-0 md:ml-5 h-10  hover:before:bg-redborder-yellow-600 relative w-44 overflow-hidden border border-yellow-600 bg-white text-yellow-600 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:w-0 before:bg-yellow-600 before:transition-all before:duration-500 hover:text-white hover:shadow-yellow-600 hover:before:left-0 hover:before:w-full">
          <span className="relative z-10" onClick={openModal}>
            Checkout
          </span>
        </button>
      </div>

      <dialog id="my_modal_2" className="modal">
        <div className="p-5">
          <h3 className="font-bold text-lg">Thank you for choosing us!</h3>
          <p className="py-4">
            Please proceed to the cashier's desk to settle your bookings.
          </p>
        </div>
        <form method="dialog" className="modal-backdrop p-5 float-right">
          <button className="bg-yellow-600 text-white p-3">Okay</button>
        </form>
      </dialog>
    </div>
  );
};

export default Billing;
