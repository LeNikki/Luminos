export interface Room {
  id: number;
  num: number;
  arrivalDate: string;
  departureDate: string;
  img: string;
  roomType: string;
  price: number; // Add the price property
}

export const bookedRooms: Room[] = [];
