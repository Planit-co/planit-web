import PlannerStrategizing from "../../assets/images/planners-strategizing.svg";
import VendorStrategizing from "../../assets/images/vendors-strategizing.svg";

const ProblemSection = () => {
  return (
    <section className="problem-section montserrat-font pb-3">
      <nav className="p-2 md:px-5 md:py-4.5 lg:px-10">
        <ul className="font-semibold flex justify-between">
          <li>Corporate Events</li>
          <li>Large-scale Productions</li>
          <li>Conferences</li>
          <li>Weddings</li>
          <li>Celebrations</li>
        </ul>
      </nav>

      <div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 my-15 mx-2 md:mx-5 lg:mx-10">
          <div>
            <li className="playfair-display-font font-bold text-xl md:text-2xl mb-7">
              The Planner’s Struggle
            </li>
            <ul className="flex flex-col gap-4">
              <li>Keeping up with endless Whatsapp threads.</li>
              <li>Manually sourcing for Vendors.</li>
              <li>Unverified service providers.</li>
              <li>Scattered task tracking.</li>
              <li>Last-minute confusion.</li>
            </ul>
          </div>

          <img src={VendorStrategizing} alt="vendors strategizing" loading="lazy" />

          <img src={PlannerStrategizing} alt="planners strategizing" loading="lazy" />

          <div className="mx-auto">
            <li className="playfair-display-font font-bold text-xl md:text-2xl mb-7">
              The Vendor’s Hurdle
            </li>
            <ul className="flex flex-col gap-4">
              <li>Disorganized Client communication.</li>
              <li>Overdependence on referrals.</li>
              <li>No structured review system.</li>
              <li>Limited visibility.</li>
            </ul>
          </div>
        </div>

        <p className="italic font-medium text-xl w-max mx-auto pb-2.5 border-b border-[#D4AF37] ">
          PlanIt replaces disorganization with structured collaboration!{" "}
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
