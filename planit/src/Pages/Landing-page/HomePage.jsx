import "./HomePage.css";
import { LuArrowUpRight } from "react-icons/lu";

const HomePage = () => {
  return (
    <>
      <div className="hero-section p-2 md:p-5 lg:p-10">
        <header className="px-2 md:px-5 py-1 flex justify-between items-center">
          <h2 className="font-bold text-2xl md:text-3xl">Logo</h2>
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
          <div className="flex gap-1 items-center">
            <p className="font-semibold">Explore Marketplace</p>
            <LuArrowUpRight className="arrow text-lg" />
          </div>
        </header>
      </div>
    </>
  );
};

export default HomePage;
