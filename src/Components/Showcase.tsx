import deluxeRoom from "../assets/deluxeRoom.png";
import dining from "../assets/dining.png";
import swimming from "../assets/swimming.jpg";
export default function Showcase() {
  return (
    <div className="p-5 md: p-24">
      <div className="w-full flex pt-10 flex-col md:flex-row justify-around items-center">
        <section className="w-full m-3 md:w-1/4">
          <h4 className="text-yellow-600 mb-2">Accomodations</h4>
          <h2 className="font-bold text-3xl mb-5">Explore our Deluxe Rooms</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <button className="mt-5 text-black hover:before:bg-redborder-yellow-600 relative w-44 p-2  overflow-hidden border border-yellow-600 bg-white  text-yellow-600 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-600 before:transition-all before:duration-500 hover:text-white hover:shadow-yellow-600 hover:before:left-0 hover:before:w-full">
            <span className="relative z-10">Explore our Rooms!</span>
          </button>
        </section>
        <img src={deluxeRoom} className="w-90 mt-10 md:mt-0 md:w-1/2" />
      </div>

      <div className="w-full flex flex-col md:flex-row justify-around items-center pt-24">
        <img src={dining} className="w-90 md:w-1/2" />
        <section className="w-full mt-5 md:mt-0 md:w-1/4">
          <h2 className="font-bold text-3xl mb-5">Fine Dining</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </section>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-around items-center pt-24">
        <section className="w-full md:w-1/4">
          <h2 className="font-bold text-3xl mb-5">Unli Swimming Pool</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </section>
        <img src={swimming} className="w-90 m-5 md:m-0 md:w-2/5" />
      </div>
    </div>
  );
}
