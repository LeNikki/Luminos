import client1 from "../assets/client1.png";
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      stars: 5,
      testimony:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora consequuntur numquam repellendus voluptates repellat iste laboriosam quibusdam debitis blanditiis, deserunt dolore dolor, consequatur aliquid ipsa libero minima reiciendis inventore!",
    },
    {
      id: 2,
      name: "Kyle Roderick",
      stars: 5,
      testimony:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora consequuntur numquam repellendus voluptates repellat iste laboriosam quibusdam debitis blanditiis, deserunt dolore dolor, consequatur aliquid ipsa libero minima reiciendis inventore!",
    },
    {
      id: 3,
      name: "Hannah Lombit",
      stars: 5,
      testimony:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora consequuntur numquam repellendus voluptates repellat iste laboriosam quibusdam debitis blanditiis, deserunt dolore dolor, consequatur aliquid ipsa libero minima reiciendis inventore!",
    },
  ];
  return (
    <div className="p-3 pt-10 md:p-24">
      <h1 className="font-bold text-3xl text-center">What our Clients say</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-24">
        {testimonials.map((client) => {
          return (
            <section
              key={client.id}
              className="m-5 p-10 shadow-sm shadow-slate-600 rounded-xl"
            >
              <section className="flex flex-row items-center ">
                <img src={client1} className="w-10 rounded-3xl mr-5" />
                <h1>{client.name}</h1>
              </section>
              <div className="flex mt-5">
                {Array.from({ length: client.stars }).map((_, index) => (
                  <i key={index} className="fas fa-star text-yellow-500"></i>
                ))}
              </div>
              <p className="text-justify text-slate-600 mt-5">
                {client.testimony}
              </p>
            </section>
          );
        })}
      </div>
    </div>
  );
}
