import "./DesktopHero.css";

const DesktopHero = ({ addedClassName = "" }) => {
  return (
    <div className="hero w-3/5 lg:w-1/2  text-white flex flex-col justify-between mr-16 md:mr-20 lg:mr-24 px-2 py-4 sm:px-2.5 sm:py-5 lg:px-7 lg:pt-14 lg:pb-8 xl:pb-12 rounded-2xl lg:rounded-4xl">
      <div className={`heading ${addedClassName} `}>
        <span className="font-black text-sm">Planit</span>
        <div className="mt-18 xl:mt-32">
          <h1 className="font-black text-3xl xl:text-4xl mb-2">
            Plan smarter. Deliver better.
          </h1>
          <p className="font-medium text-sm">
            Create your free account and start managing events with the people
            and vendors that make it happen.
          </p>
        </div>
      </div>
      <div className="getting-started">
        <div className="getting-started-heading flex items-center justify-between mb-10 xl:mb-11">
          <h2 className="text-2xl xl:text-3xl font-bold max-w-1/2 xl:max-w-2/5">
            Get Started With Us
          </h2>
          <p className="text-sm font-medium max-w-1/3 xl:max-w-2/5">
            Complete the easy steps to setup your account as a planner or vendor
          </p>
        </div>
        <div className="gap-2 text-sm grid grid-cols-3">
          <div className="card rounded-xl xl:rounded-2xl px-2.5 py-5 xl:px-4.5 xl:py-8 bg-white text-black">
            <h3 className="rounded-full bg-black w-6 h-6 flex items-center justify-center text-white mb-4 font-semibold">
              1
            </h3>
            <p className="font-bold">Fill in your details</p>
            <p className="font-medium">
              Your basic info and role, all in one place.
            </p>
          </div>
          <div className="card rounded-xl xl:rounded-2xl px-2.5 py-5 xl:px-4.5 xl:py-8">
            <h3 className="rounded-full bg-black w-6 h-6 flex items-center justify-center mb-4 font-semibold">
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
          <div className="card rounded-xl xl:rounded-2xl px-2.5 py-5 xl:px-4.5 xl:py-8">
            <h3 className="rounded-full bg-black w-6 h-6 flex items-center justify-center mb-4 font-semibold">
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
  );
};

export default DesktopHero;
