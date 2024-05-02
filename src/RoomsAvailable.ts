import deluxeSuite from "./assets/deluxeSuite.png";
import juniorSuite from "./assets/juniorSuite.png";
import singleRoom from "./assets/singleRoom.png";
import standardRoom from "./assets/standardRoom.png";
import doubleRoom from "./assets/doubleRoom.png";

export const rooms = [
  { num: 0, name: "Single Room", img: singleRoom, price: 1500, available: 5 },
  { num: 1, name: "Double Room", img: doubleRoom, price: 2600, available: 4 },
  {
    num: 2,
    name: "Standard Room",
    img: standardRoom,
    price: 4500,
    available: 3,
  },
  {
    num: 3,
    name: "Junior Suites",
    img: juniorSuite,
    price: 7000,
    available: 5,
  },
  { num: 4, name: "Deluxe Room", img: deluxeSuite, price: 9600, available: 3 },
];
