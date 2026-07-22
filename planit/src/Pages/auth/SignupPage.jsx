import { useState } from "react";
import { Link } from "react-router-dom";
import DesktopHero from "./DesktopHero";
import "./SignupPage.css";
import GoogleIcon from "../../assets/images/google-icon.svg";
import EyeIcon from "../../assets/images/eye-icon.svg";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="signup-container flex items-stretch justify-center md:gap-5 lg:gap-24 ">
      <DesktopHero />

      {/* Signup Form */}
      <div className="form-container flex flex-col w-full sm:w-3/5 md:w-1/3">
        <h2 className="text-3xl xl:text-4xl font-bold mb-2 text-center mt-5 md:mt-10">
          Let's get you started!
        </h2>
        <p className="text-sm font-medium mb-10 xl:mb-10 text-center">
          Takes less than 2 minutes.
        </p>
        <form className="signup-form xl:px-3 xl:py-4 text-sm xl:text-base">
          <div className="continue-with-google mb-6 xl:mb-8 p-3 flex justify-center items-center gap-2.5">
            <img src={GoogleIcon} alt="Google Icon" />
            <p className="font-semibold text-sm poppins-semibold">
              Continue with Google
            </p>
          </div>

          <div className="flex items-center justify-between mb-6 xl:mb-8">
            <div className="bg-[#0B1F3A] h-px w-1/3"></div>
            <p className="font-semibold text-sm">or</p>
            <div className="bg-[#0B1F3A] h-px w-1/3"></div>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-2.5" htmlFor="name">
              Full Name
            </label>
            <input
              className="shadow appearance-none w-full py-3 px-5 leading-tight"
              id="name"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2.5" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow appearance-none w-full py-3 px-5 leading-tight"
              id="email"
              type="email"
              placeholder="john.doe@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2.5" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none w-full py-3 px-5 leading-tight"
                id="password"
                type={showPassword.password ? "text" : "password"}
                placeholder="••••••••"
              />
              <img
                src={EyeIcon}
                alt="Eye Icon"
                className="absolute right-5 top-1/2 bottom-1/2 -translate-y-1/2 cursor-pointer z-10"
                onClick={() => togglePasswordVisibility("password")}
              />
              <div
                className={`absolute right-5 top-1/2 bottom-1/2 -translate-y-1/2 border w-5 border-[#9CA3AF] bg-[#9CA3AF] rotate-150 ${showPassword.password ? "hidden" : "block"}`}
              ></div>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block font-semibold mb-2.5"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none w-full py-3 px-5 leading-tight"
                id="confirm-password"
                type={showPassword.confirmPassword ? "text" : "password"}
                placeholder="••••••••"
              />
              <img
                src={EyeIcon}
                alt="Eye Icon"
                className="absolute right-5 top-1/2 bottom-1/2 -translate-y-1/2 cursor-pointer z-10"
                onClick={() => togglePasswordVisibility("confirmPassword")}
              />
              <div
                className={`absolute right-5 top-1/2 bottom-1/2 -translate-y-1/2 border w-5 border-[#9CA3AF] bg-[#9CA3AF] rotate-150 ${showPassword.confirmPassword ? "hidden" : "block"}`}
              ></div>
            </div>
          </div>
          <div className="mb-6 xl:mb-8">
            <label className="block font-semibold mb-2.5" htmlFor="role">
              Select Role
            </label>
            <select
              name="role"
              id="role"
              className="shadow appearance-none w-full py-3 px-5 leading-tight"
            >
              <option value="Event Planner">Event Planner</option>
              <option value="Vendor">Vendor</option>
            </select>
          </div>
          <button
            className="btn text-white font-semibold py-3 px-5 focus:outline-none w-full"
            type="submit"
          >
            Sign Up
          </button>
          <p className="text-center text-sm mt-2.5">
            Already have an account?{" "}
            <Link to="/signin" className="link cursor-pointer">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
