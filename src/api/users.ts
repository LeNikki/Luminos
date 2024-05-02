import axios from "axios";


export const fetchUsersData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; // Propagate the error to the caller
  }
};

export const createUser = async (userData) => {
  try {
    await axios.post("http://localhost:5000/users", userData);
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

