import axios from "axios";

export interface User {
  username: string;
  phone: number;
  email: string;
  password: string;
}
export const fetchUsersData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Propagate the error to the caller
  }
};

export const createUser = async (userData: User) => {
  try {
    await axios.post("http://localhost:5000/users", userData);
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
