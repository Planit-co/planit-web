import { useState } from "react";
import { Link } from "react-router-dom";
import DesktopHero from "./DesktopHero";
import "./SignUpPage.css";
import GoogleIcon from "../../assets/images/google-icon.svg";
import EyeIcon from "../../assets/images/eye-icon.svg";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="signup-container flex items-center 2xl:justify-center">
        <DesktopHero addedClassName = {"mb-40"} />

        <div className="form-container flex flex-col w-1/3">
          <h2 className="text-3xl xl:text-4xl font-bold mb-2 text-center">
            Welcome Back!
          </h2>
          <p className="text-sm font-medium mb-10 xl:mb-14 text-center">
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
            <div className="mb-2 relative">
              <label className="block font-semibold mb-2.5" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none w-full py-3 px-5 leading-tight"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
              />
              <img
                src={EyeIcon}
                alt="Eye Icon"
                className="absolute right-5 top-12.5 cursor-pointer z-10"
                onClick={() => togglePasswordVisibility()}
              />
              <div
                className={`absolute right-5 top-14 border w-5 border-[#9CA3AF] bg-[#9CA3AF] rotate-150 ${showPassword ? "hidden" : "block"}`}
              ></div>
            </div>
            <div className="mb-16 flex justify-between items-center font-medium xl:font-semibold">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-1 cursor-pointer" />
                <label htmlFor="remember">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="forgot-link">
                Forgot Password?
              </Link>
            </div>

            <button
              className="btn text-white font-semibold py-3 px-5 focus:outline-none w-full"
              type="submit"
            >
              Log In
            </button>
            <p className="text-center text-sm mt-2.5">
              Don't have an account?{" "}
              <Link to="/" className="link cursor-pointer">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
