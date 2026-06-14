import "./HomePage.css";
import { LuArrowUpRight } from "react-icons/lu";
import HeroImage from "../../assets/images/hero-image.jpg";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section relative p-2 md:p-5 lg:p-10 md:max-h-screen">
        {/* Background Image */}
        <img
          src="/images/bg-image.jpg"
          alt="background image"
          className="absolute inset-0 w-full h-full object-cover "
        />

        {/* Image overlay */}
        <div className="image-overlay absolute inset-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:gap-10 xl:gap-20">
          <header className="header px-2 md:px-5 py-1 flex justify-between items-center bg-white montserrat-font">
            <h2 className="font-bold text-2xl md:text-3xl cursor-pointer">
              Logo
            </h2>
            <nav>
              <ul className="flex gap-2 md:gap-4 lg:gap-8 font-medium">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center cursor-pointer">
              <p className="font-semibold">Explore Marketplace</p>
              <LuArrowUpRight className="arrow text-lg" />
            </div>
          </header>

          <div className="main text-white p-2 md:p-4 flex md:gap-12 xl:gap-16 items-center">
            <div className="main-content w-11/20">
              <h2 className="font-bold text-2xl md:text-3xl text-center playfair-display-font">
                The Smart Event Management <span>Platform</span> for <span>Planners</span> and <span>Vendors</span>
              </h2>
            </div>
            <img src={HeroImage} alt="hero image" className="w-9/20 border-8 rounded-xl " />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
