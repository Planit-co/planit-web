import { LuArrowUpRight } from "react-icons/lu";
import HeroImage from "../../assets/images/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section relative p-2 md:p-5 lg:p-10">
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

        <div className="main text-white p-2 md:p-4 flex gap-12 xl:gap-16 items-center">
          <div className="main-content w-11/20">
            <h2 className="font-bold text-2xl md:text-3xl text-center 2xl:text-left playfair-display-font mb-16">
              The Smart Event Management <span>Platform</span> for{" "}
              <span>Planners</span> and <span>Vendors</span>
            </h2>
            <div className="lato-regular text-sm flex flex-col gap-3 mb-12">
              <p>
                PlanIt is an event management platform that helps planners
                discover trusted vendors, manage event tasks, and collaborate in
                real time - all in one structured workspace.
              </p>
              <p>No scattered chats. No guesswork. No chaos.</p>
            </div>
            <div className="montserrat-font font-semibold flex flex-col md:flex-row gap-10 mb-16">
              <button className="btn btn-planner py-4 px-8 rounded-md">
                Get Started as a Planner
              </button>
              <button className="btn btn-vendor py-4 px-8 rounded-md ">
                Join as a Vendor
              </button>
            </div>
            <div className="roadmap montserrat-font font-semibold flex gap-4">
              <p>Plan Events</p>
              <p>Find Trusted Vendors</p>
              <p>Execute Flawlessly</p>
            </div>
          </div>
          <div className="hero-image relative w-9/20 border-8 rounded-xl ">
            <img src={HeroImage} alt="hero image" className="rounded-md" />
            <div className="absolute flex items-center cursor-pointer left-8 bottom-12">
              <p className="font-semibold">Explore Marketplace</p>
              <LuArrowUpRight className="arrow text-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
