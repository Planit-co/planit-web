import { useState } from "react";
import "./SignupPage.css";
import GoogleIcon from "../assets/images/google-icon.svg";
import EyeIcon from "../assets/images/eye-icon.svg";

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
    <div className="signup-container flex items-stretch">
      <div className="hero w-1/2 text-white flex flex-col justify-between mr-24">
        <div className="heading">
          <span className="logo font-black text-sm">Planit</span>
          <div className="mt-20">
            <h1 className="font-black text-4xl mb-2">
              Plan smarter. Deliver better.
            </h1>
            <p className="font-medium text-sm">
              Create your free account and start managing events with the people
              and vendors that make it happen.
            </p>
          </div>
        </div>
        <div className="getting-started">
          <div className="getting-started-heading flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold max-w-1/2">
              Get Started With Us{" "}
            </h2>
            <p className="text-sm font-medium max-w-1/3">
              Complete the easy steps to setup your account as a planner or
              vendor
            </p>
          </div>
          <div className="gap-2 text-sm grid grid-cols-3">
            <div className="rounded-2xl px-4 py-6 bg-white text-black">
              <h3 className="rounded-full bg-black w-6 h-6 flex items-center justify-center text-white">
                1
              </h3>
              <p className="font-bold">Fill in your details</p>
              <p className="font-medium">
                Your basic info and role, all in one place.
              </p>
            </div>
            <div className="rounded-2xl px-4 py-6">
              <h3 className="rounded-full bg-black w-6 h-6 flex items-center justify-center">
                2
              </h3>
              <p className="font-bold">
                Verify your email
                <br></br>
              </p>
              <p className="font-medium">
                Quick confirmation to secure your account.
              </p>
            </div>
            <div className="rounded-2xl px-4 py-6">
              <h3 className="rounded-full bg-black w-6 h-6 flex items-center justify-center">
                3
              </h3>
              <p className="font-bold">Finish your profile</p>
              <p className="font-medium">
                A few final touches and you're ready to go.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Form */}
      <div className="form-container h-full flex flex-col pt-20">
        <h2 className="text-4xl font-bold mb-2 text-center">
          Let's get you started!
        </h2>
        <p className="text-sm font-medium mb-14 text-center">
          Takes less than 2 minutes.
        </p>
        <form className="signup-form px-3 py-4">
          <div className="continue-with-google mb-8 p-3 flex justify-center items-center gap-2.5">
            <img src={GoogleIcon} alt="Google Icon" />
            <p className="font-semibold text-sm">Continue with Google</p>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="bg-[#0B1F3A] h-px w-1/3"></div>
            <p>or</p>
            <div className="bg-[#0B1F3A] h-px w-1/3"></div>
          </div>

          <div className="mb-4">
            <label
              className="block font-semibold mb-2.5 text-base"
              htmlFor="name"
            >
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
            <label
              className="block font-semibold mb-2.5 text-base"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none w-full py-3 px-5 leading-tight"
              id="email"
              type="email"
              placeholder="john.doe@example.com"
            />
          </div>
          <div className="mb-4 relative">
            <label
              className="block font-semibold mb-2.5 text-base"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none w-full py-3 px-5 leading-tight"
              id="password"
              type={showPassword.password ? "text" : "password"}
              placeholder="••••••••"
            />
            <img
              src={EyeIcon}
              alt="Eye Icon"
              className="absolute right-5 top-12.5 cursor-pointer z-10"
              onClick={() => togglePasswordVisibility("password")}
            />
          </div>
          <div className="mb-4 relative">
            <label
              className="block font-semibold mb-2.5 text-base"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none w-full py-3 px-5 leading-tight"
              id="confirm-password"
              type={showPassword.confirmPassword ? "text" : "password"}
              placeholder="••••••••"
            />
            <img
              src={EyeIcon}
              alt="Eye Icon"
              className="absolute right-5 top-12.5 cursor-pointer"
              onClick={() => togglePasswordVisibility("confirmPassword")}
            />
          </div>
          <div className="mb-8">
            <label
              className="block font-semibold mb-2.5 text-base"
              htmlFor="role"
            >
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
            <a href="/login">
              Already have an account ?{" "}
              <span className=" cursor-pointer">Log In</span>{" "}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
