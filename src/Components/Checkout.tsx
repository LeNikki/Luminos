import cashier from "../assets/cashier.png";

const Checkout = () => {
  return (
    <div className="w-1/2 shadow-xl p-10 rounded-md text-center bg-yellow-100/50 flex flex-col justify-center items-center">
      <img src={cashier} className="w-44" />
      You may now go to the cashier and settle your payments. Thank you.
    </div>
  );
};

export default Checkout;
