import signup from "./assets/signup.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { fetchUsersData, createUser } from "./api/users";
import { schema } from "./api/validation";
import { useForm } from "react-hook-form";
import { User } from "./api/users";
type Timeout = ReturnType<typeof setTimeout>;
export const RegisterForm = () => {
  const [userDatabase, setUserDatabase] = useState<User[]>([]);
  const [warning, setWarning] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUsersData();
        setUserDatabase(data);
      } catch (error) {
        setWarning("Error fetching users");
      }
    };
    fetchData();
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const email = watch("email");
  const checkExistingUser = () => {
    return userDatabase.some((user) => user.email === email);
  };

  useEffect(() => {
    let timeoutId: Timeout | undefined;
    if (warning) {
      timeoutId = setTimeout(() => {
        setWarning("");
      }, 4000);
    }
    return () => clearTimeout(timeoutId);
  }, [warning]);

  const submitForm = (data: User) => {
    const userExists = checkExistingUser();
    console.log(userExists);
    if (userExists) {
      setWarning("User with this email already exists");
    } else {
      console.log("User with this email does not exist");
      createUser(data);
      setWarning("Submitted Succcessfully");
    }
  };

  return (
    <>
      <div className="flex bg-slate-100 h-screen  width-full justify-center items-center">
        <div className="w-3/4 h-3/4 flex shadow-xl rounded-3xl">
          <div className="bg-white w-1/2 flex flex-col items-center rounded-l-3xl p-10">
            <div className="w-full flex items-center mb-8 justify-between ">
              <NavLink to="/">
                <i className="fa-solid fa-house"></i>
              </NavLink>
              <h1 className="font-bold ml-14 flex items-center ">
                Sign Up <i className="ml-3 fa-solid fa-pen"></i>
              </h1>
              <p className="text-white">Sign Up</p>
            </div>
            <form
              onSubmit={handleSubmit(submitForm)}
              className="flex flex-col justify-between
              "
            >
              <section className="pb-3">
                <label htmlFor="username">
                  Username
                  <input
                    id="username"
                    type="text"
                    {...register("username")}
                    className="border-2 w-full p-1 rounded-md"
                  />
                </label>
              </section>
              <p className="text-red-600 text-xs">{errors.username?.message}</p>
              <section className="pb-3">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="number"
                  {...register("phone")}
                  className="border-2 w-full p-1 rounded-md"
                />
              </section>
              <p className="text-red-600 text-xs">{errors.phone?.message}</p>
              <section className="pb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  {...register("email")}
                  className="border-2 w-full p-1 rounded-md"
                />
              </section>
              <p className="text-red-600 text-xs">{errors.email?.message}</p>
              <section className="pb-3">
                <label htmlFor="email">Password</label>
                <input
                  id="password"
                  type="text"
                  {...register("password")}
                  className="border-2 w-full p-1 rounded-md"
                />
              </section>
              <p className="text-red-600 text-xs">{errors.password?.message}</p>
              <input
                type="submit"
                className="p-2  text-center text-white bg-yellow-600 hover:bg-yellow-800/70 w-52 m-5 rounded-xl"
              />
              {warning && (
                <p className="text-red-600 text-xs text-center">{warning}</p>
              )}
            </form>
          </div>
          <div className="bg-yellow-600 w-1/2  rounded-r-3xl">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <h1 className="font-bold text-white text-center mb-10">
                Already have an account?
              </h1>
              <img src={signup} className="w-56" />
              <p className="text-white mt-5">Please login using your account</p>
              <NavLink
                to="/login"
                className="p-2 text-center  text-white bg-yellow-800 hover:bg-yellow-800/70 w-52 m-5 rounded-xl"
              >
                Login Instead
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
