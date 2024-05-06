import * as yup from "yup";
import { User } from "./users";
export const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  phone: yup.number().required("Phone number is required").positive(),
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup
    .string()
    .required()
    .min(8, "Password should be at least 8 characters")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .matches(/[0-9]/, "Password must contain at least one number"),
});

export const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
export const isInteger = (phone: number) => {
  return /^\d+$/.test(phone.toString());
};
export const checkInputs = (newUser: User) => {
  if (newUser.username == "") {
    throw "Error: Please add username";
  }
  if (!isValidEmail(newUser.email)) {
    throw "Please enter a valid email address";
  }
  if (newUser.phone == null || newUser.phone == 0) {
    throw "Error: Please add phone number";
  }
  if (!isInteger(newUser.phone)) {
    throw "Phone number must contain only digits";
  }
  if (newUser.password.length < 8) {
    throw "Password must be at least 8 characters long";
  }
  const numberRegex = /\d/;
  if (!numberRegex.test(newUser.password)) {
    throw "Password must contain at least one number";
  }
  const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  if (!specialCharRegex.test(newUser.password)) {
    throw "Password must contain at least one special character";
  }
};
