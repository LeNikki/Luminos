import hotelLogo from "../assets/hotelLogo.png";
export default function Footer() {
  return (
    <div className="w-full h-auto pt-5 pb-5 bg-yellow-600 h-52 flex flex-col md:flex-row md:justify-between items-center">
      <div className=" flex justify-center p-10">
        <section className="flex flex-col items-center justify-around">
          <img src={hotelLogo} alt="hotelLogo" width="32" />
          <h1 className="font-bold text-lg ">Luminos Hotel</h1>
          <p>Copyright @2024, Cebu City, Philippines</p>
        </section>
      </div>
      <ul>
        <li>Careers</li>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>Contact Us</li>
      </ul>
      <ul>
        <li>Corner M.J Cuenco, R. Palma St.</li>
        <li>Cebu City, Cebu</li>
        <li>Philippines</li>
      </ul>
      <div className="flex flex-row justify-between w-full md:w-1/4 p-20">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-threads"></i>
      </div>
    </div>
  );
}
