import TextInput from "../../Components/Ui/TextInput";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="md:w-[554px] sm:w-[300px] w-250px  py-[220px] px-[73px] box-shadow">
        <div className="mb-[100px]">
          <h1 className="font-bold text-4xl">Welcome Back</h1>
          <p>
            Don’t have an account? <NavLink to="/signup-page">Sign Up</NavLink>
          </p>
        </div>
        <form>
          <TextInput
            type="email"
            label="Email"
            id="email"
            name="email"
            className="flex-col border border-solid border-[#04030899] rounded-[5px] py-3 px-5 mb-5"
            placeholder="Email"
            required
          />
          <TextInput
            label="Password"
            id="password"
            name="password"
            className="flex-col border border-solid border-[#04030899] rounded-[5px] py-3 px-5 mb-5"
            placeholder="Password"
            required
          />
          <span className="block">Forgot password?</span>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
