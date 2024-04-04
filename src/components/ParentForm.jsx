/* eslint-disable react/prop-types */
import { Logo } from "../assets";
import { moveAnimation } from "../utilities/data";

const ParentForm = ({ closeModal }) => {
  return (
    <div className="modal lg:w-[70%] w-[90%] mx-auto bg-red-400">
      <div className=" flex">
        <div className="md:w-1/2 formSide">
          <div className="md:w-[80%] w-[90%] mx-auto py-10">
            <div className="brand">
              <img src={Logo} alt="" />
            </div>
            <div>
              <h1 className="font-showcase !text-2xl">
                Join Our Parent Community
              </h1>
              <p className="inter-small !text-xs !font-lighter">
                Welcome! Please enter your details to join Tech Kiddies Parent
                Community.
              </p>
            </div>

            <form
              action="https://formspree.io/f/xkndveeq"
              method="POST"
              className="flex flex-col gap-5"
            >
              <div className="">
                <label htmlFor="name">Name</label> <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="px-5 py-2 mt-3 bg-transparent border-[1px] border-black w-full rounded-full"
                />
              </div>
              <div className="">
                <label htmlFor="phone_number">Phone Number</label> <br />
                <input
                  type="tel"
                  name="phone_number"
                  id="phone_number"
                  placeholder="Enter your phone pumber"
                  className="px-5 py-2 mt-3 bg-transparent border-[1px] border-black w-full rounded-full"
                />
              </div>
              <div className="">
                <label htmlFor="email">Email</label> <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="px-5 py-2 mt-3 bg-transparent border-[1px] border-black w-full rounded-full"
                />
              </div>
              <div className="">
                <label htmlFor="child_name">
                  Child or children learning tech
                </label>
                <br />
                <input
                  type="text"
                  id="child_name"
                  name="child_name"
                  placeholder="Enter your email"
                  className="px-5 py-2 mt-3 bg-transparent border-[1px] border-black w-full rounded-full"
                />
              </div>

              <button
                className="py-3 rounded-full bg-darkerBlue border-0 text-mainWhite text-xs w-full"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="lg:w-1/2 imageSide">
          <div className="move-wrap w-full">
            {moveAnimation.map((each, index) => (
              <div
                key={index}
                className={`child-container flex items-center justify-center h-[85px] border-2 ${each.style} font-showcase !text-xl`}
              >
                {each.text}
              </div>
            ))}
          </div>

          <div className="move-wrap down w-full">
            {moveAnimation.map((each, index) => (
              <div
                key={index}
                className={`child-container flex items-center justify-center h-[80px] border-2 ${each.style} font-showcase !text-xl`}
              >
                {each.text}
              </div>
            ))}
          </div>

          <button
            onClick={closeModal}
            className=" bg-white px-10 py-2 rounded-full absolute right-5 top-5"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParentForm;
