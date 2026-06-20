import PlannerSolutionImage from "../../assets/images/planner-solution-image.svg";

const SolutionSection = () => {
  return (
    <section className="solution-section p-2 md:px-5 md:py-4.5 lg:px-10 md:pt-15">
      <div className="relative">
        <div className="montserrat-font text-center flex flex-col gap-2.5 mb-25">
          <h1 className="playfair-display-font text-2xl md:text-3xl font-bold">
            The PlanIt Factor
          </h1>
          <p className="font-semibold">
            Everything You <span>Need. </span>One <span>Platform.</span>
          </p>
        </div>
        <img
          src={PlannerSolutionImage}
          alt="planner solution image"
          className="absolute right-0 -top-4 md:h-180"
          loading="lazy"
        />
        <div className="flex flex-col gap-4">
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-[#0B1F3A]"></div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Verified Vendor Discovery</h2>
              <div className="lato-regular flex flex-col gap-2">
                <p>Search vendors by category, rating, and location.</p>
                <p>
                  View profiles, services, and transparent reviews before
                  booking.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-[#0B1F3A]"></div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Centralized Communication</h2>
              <div className="lato-regular flex flex-col gap-2">
                <p>Keep every conversation inside the event workspace.</p>
                <p>Message vendors instantly. Share updates and files.</p>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-[#0B1F3A]"></div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Event & Task Management</h2>
              <div className="lato-regular flex flex-col gap-2">
                <p>Monitor deliverables from one dashboard.</p>
                <p>Create events. Assign responsibilities. Track progress</p>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-14 h-14 bg-[#0B1F3A]"></div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-2xl">Smart Dashboards</h2>
              <div className="lato-regular flex flex-col gap-2">
                <p>See events, bookings, and tasks status at a glance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SolutionSection;
