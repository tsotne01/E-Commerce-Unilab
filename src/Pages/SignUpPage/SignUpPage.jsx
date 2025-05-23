import React, { useContext, useState } from "react";
import {
  generateToken,
  getUserFromLocalStorage,
  setUserToLocalStorage,
} from "../../utils/user";
import { useForm } from "react-hook-form";
import { userRegistrationSchema } from "../../Schemas/userSchema.js";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import TextInput from "../../Components/Ui/TextInput";
import Button from "../../Components/Ui/Button";
import appleIcon from "../../assets/Icons/Apple-icon.svg";
import googleIcon from "../../assets/Icons/Google-icon.svg";
import { NavLink } from "react-router-dom";
import { messageContext } from "../../Services/Providers/MessageContext.jsx";
import checkCircle from "../../assets/Images/check-circle.png"

const SignUpPage = () => {
  // const navigate = useNavigate();

  const [isRegistered, setIsRegistered] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userRegistrationSchema),
  });
  const { setMessageSuccess, setMessageError } = useContext(messageContext);

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const token = generateToken();
    const user = getUserFromLocalStorage();
    if (user?.email === email) {
      console.log("User already exists");
      setMessageError("User already exists");
      return;
    }
    console.log(data);
    setUserToLocalStorage({ email, password, token });
    setIsRegistered(true);
    console.log("User registered successfully");
  };
  if (isRegistered) {
    setMessageSuccess("Registered Succesfully!");
  }
  if (isRegistered) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <img className="w-[100px] h-[100px]" src={checkCircle} alt="checked circle" />
          <h2 className="text-lg text-center font-bold">Sign Up successfully</h2>
          <NavLink to="/login-page" className="text-white bg-black flex items-center justify-center w-full min-h-12 min-w-2xs max-w-2xl">
            Login
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-3 h-screen">
        <div className="mx-auto w-[320px] sm:w-96 md:w-[400px] lg:w-[554px]">
          <h1 className="text-[#040308] text-3xl font-bold mb-[10px]">
            Create account
          </h1>
          <p className="block mb-24">Already have an account? Login</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2">
              <div>
                <TextInput
                  type="text"
                  label="Full Name"
                  id="fullName"
                  name="fullName"
                  className="flex-col border border-solid border-[#04030899] rounded-[5px] py-3 px-5 mb-5"
                  placeholder="Full Name"
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="text-red-500">{errors.fullName.message}</p>
                )}
              </div>
              <div>
                <TextInput
                  type="text"
                  label="Last Name"
                  id="lastName"
                  name="lastName"
                  className="flex-col border border-solid border-[#04030899] rounded-[5px] py-3 px-5 mb-5"
                  placeholder="Last Name"
                  {...register("lastName")}
                />
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <TextInput
              type="email"
              label="Email"
              id="email"
              name="email"
              className="flex-col border border-solid border-[#04030899] rounded-[5px] py-3 px-5 mb-5"
              placeholder="Email"
              {...register("email")}
            />

            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <TextInput
              label="Password"
              id="password"
              type="password"
              name="password"
              className="flex-col border border-solid border-[#04030899] rounded-[5px] py-3 px-5 mb-5"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <div className="flex items-center gap-2 mb-8">
              <input
                className="w-5 h-5 accent-black"
                name="checkbox-signup"
                id="checkbox-signup"
                type="checkbox"
                {...register("checkbox")}
              />
              <label htmlFor="checkbox-signup">
                I agree to DopeSass Terms of service and Privacy policy
              </label>
            </div>
            <Button variant="primary" type="submit">
              Create Account{" "}
            </Button>
          </form>
          <span className="flex justify-center items-center gap-1  mt-8 mb-8">
            <span className="inline-block w-[48%] border-[1px] opacity-80 border-[#04030866] " />
            or
            <span className="inline-block w-[48%] border-[1px] opacity-80 border-[#04030866] " />
          </span>
          <div>
            <Button className="mb-8" variant="continuewith" type="button">
              <img
                className="inline-block mr-2"
                src={appleIcon}
                alt="apple icon"
              />{" "}
              Continue With Apple
            </Button>
          </div>
          <div>
            <Button variant="continuewith" type="button">
              <img
                className="inline-block mr-2"
                src={googleIcon}
                alt="apple icon"
              />{" "}
              Continue With Google
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
