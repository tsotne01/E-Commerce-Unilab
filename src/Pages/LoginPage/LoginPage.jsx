import Button from "../../Components/Ui/Button";
import TextInput from "../../Components/Ui/TextInput";
import { NavLink, useNavigate } from "react-router-dom";
import appleIcon from "../../assets/Icons/Apple-icon.svg";
import googleIcon from "../../assets/Icons/Google-icon.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { loginSchema } from "../../Schemas/userSchema";
import { getUserFromLocalStorage } from "../../utils/user";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const handleLoginSubmit = (data) => {
    const user = getUserFromLocalStorage();
    if (!user) return;
    if (data.email === user.email && data.password === user.password) {
      navigate("/");
      return;
    }
    console.log(data);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="md:w-[554px] sm:w-[400px] w-[250px] sm:py-[150px] px-[45px] md:py-[220px] sm:px-[73px] box-shadow">
        <div className="mb-[100px]">
          <h1 className="font-bold text-4xl">Welcome Back</h1>
          <p>
            Don’t have an account? <NavLink to="/signup-page">Sign Up</NavLink>
          </p>
        </div>
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
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
            <span className="text-red-500">{errors.email.message}</span>
          )}
          <TextInput
            label="Password"
            id="password"
            name="password"
            className="flex-col border border-solid border-[#04030899] rounded-[5px] py-3 px-5 mb-5"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500"> {errors.password.message}</span>
          )}
          <span className="block mb-8">Forgot password?</span>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <span className="flex justify-center items-center gap-1  mt-8 mb-8">
            <span className="inline-block w-[48%] border-[1px] opacity-80 border-[#04030866] " />
            or
            <span className="inline-block w-[48%] border-[1px] opacity-80 border-[#04030866] " />
          </span>
          <button
            type="button"
            className="border-[#040308] border-1 flex justify-center items-center py-4 rounded-lg w-full mb-5"
          >
            <img
              className="inline-block mr-2"
              src={googleIcon}
              alt="apple icon"
            />{" "}
            Continue With Google
          </button>
          <button
            type="button"
            className="border-[#040308] border-1 flex justify-center items-center py-4 rounded-lg w-full "
          >
            <img
              className="inline-block mr-2"
              src={appleIcon}
              alt="apple icon"
            />{" "}
            Continue With Apple
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
