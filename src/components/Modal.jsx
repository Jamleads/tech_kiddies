/* eslint-disable react/prop-types */
import { KidImg1, Logo } from "../assets";
import { moveAnimation } from "../utilities/data";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal lg:w-[70%] mx-auto w-[90%]">
      <div className=" flex">
        <div className="lg:w-1/2 formSide">
          <div className="w-[80%] mx-auto py-10">
            <div className="brand">
              <img src={Logo} alt="" />
            </div>
            <div>
              <h1 className="font-showcase !text-2xl">
                You’re one step to empowering your kid
              </h1>
              <p className="inter-small !text-xs !font-lighter">
                Please enter your details.
              </p>
            </div>
            <form
              action="https://formspree.io/f/xvoebyyv"
              method="POST"
              className="flex flex-col gap-5"
            >
              <div className="">
                <label htmlFor="name">Name</label> <br />
                <input
                  required
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
                  required
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
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="px-5 py-2 mt-3 bg-transparent border-[1px] border-black w-full rounded-full"
                />
              </div>
              <div className="">
                <label htmlFor="location">Where are you located?</label> <br />
                <select
                  name="location"
                  id="location"
                  className="px-5 py-2 mt-3 bg-transparent border-[1px] border-black w-full rounded-full"
                >
                  <option value="">Select option</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="unitesd state">United State</option>
                  <option value="kenya">Kenya</option>
                  <option value="gambia">Gambia</option>
                </select>
              </div>

              <div className="">
                <label htmlFor="location">
                  How did you hear about Tech Kiddies?
                </label>
                <br />
                <select
                  name="how_did_you_hear_about_tech_kiddies"
                  id="how_did_you_hear_about_tech_kiddies"
                  className="px-5 py-2 mt-3 bg-transparent border-[1px] border-black w-full rounded-full"
                >
                  <option value="" className="font-lighter">
                    Select option
                  </option>
                  <option value="friend">Friend</option>
                  <option value="news">News</option>
                  <option value="social">Social Media</option>
                  <option value="event">Event</option>
                </select>
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
        <div className="lg:w-1/2 imageSide flex justify-center items-end relative">
          <div className="move-wrap w-full absolute top-0">
            {moveAnimation.map((each, index) => (
              <div
                key={index}
                className={`child-container flex items-center justify-center h-[85px] border-2 ${each.style} font-showcase !text-xl`}
              >
                {each.text}
              </div>
            ))}
          </div>
          <img src={KidImg1} alt="" className="w-[90%] mx-auto z-20" />

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

export default Modal;
