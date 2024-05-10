import {
  Star1,
  Star2,
  Star3,
  Star4,
  Thumbnail,
  TrustedImg,
  UserImg,
  animationCourseImage,
  arrowRight,
  codingCourseImage,
  videoShow,
} from "../assets";
import Button from "../components/Button";

// AOS Style
import "aos/dist/aos.css";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { footerSubLinks, kidBenefit } from "../utilities/data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ParentForm from "../components/ParentForm";
import Modal from "../components/Modal";
import Newsletter from "../components/Newsletter";
import Pricing from "../components/Pricing";
import Testimonies from "../components/Testimonies";

const Home = () => {
  const [parentForm, setParentForm] = useState(false);
  const [btnToSticky, setBtnToSticky] = useState(false);

  const xImgStyle =
    "img-qrap lg:w-[65px] lg:h-[65px] w-[40px] h-[40px] bg-mainWhite rounded-full flex items-center justify-center";

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop >= 255) {
        setBtnToSticky(true);
      } else {
        setBtnToSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const openParentForm = () => {
    setParentForm(!parentForm);
  };
  const [open, setOpen] = useState(false);

  const showEnrollForm = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Parent form modal and its overlay */}
      <div className={`${parentForm ? "" : "hidden"} bg-red-500`}>
        <ParentForm closeModal={openParentForm} />
      </div>
      <div
        onClick={openParentForm}
        className={`${parentForm ? "" : "hidden"} modal-backdrop`}
      ></div>

      {/* Enroll form  and its overlay*/}
      <div className={`${open ? "" : "hidden"} bg-red-500`}>
        <Modal closeModal={showEnrollForm} />
      </div>
      <div
        onClick={showEnrollForm}
        className={`${open ? "" : "hidden"} overflow-y-hidden modal-backdrop`}
      ></div>

      <div className="relative my-10 flex flex-col items-center gap-7">
        {/* stars */}
        <img
          src={Star1}
          alt="star"
          className=" absolute bg-re-600 left-[150px] top-[150px]"
        />
        <img
          src={Star2}
          alt="star"
          className=" absolute bg-re-600 right-[150px] top-[200px]"
        />
        <img
          src={Star3}
          alt="star"
          className="absolute bg-re-600 left-[15px] top-[400px]"
        />
        <img
          src={Star4}
          alt="star"
          className="absolute bg-re-600 right-[100px] top-[920px]"
        />
        <div className="show-text lg:w-[55%] w-[90%] mx-auto font-showcase text-center">
          Empowering kids to become innovators of the future
        </div>

        <div
          className={`${
            open || parentForm ? "hidden" : ""
          } mainBtn flex items-center justify-center ${
            btnToSticky ? "float-btn bg-baseOrange rounded-2xl" : ""
          }`}
        >
          <Link to="our_programs">
            <Button btnText={"Explore Our Programs"} />
          </Link>
          <Button
            btnClick={openParentForm}
            btnText={"Join Our Parent Community"}
            btnStyle={`lg:px-5 px-3 py-3 bg-transparent border-0 underline text-xs inter-regular font-bold`}
          />
        </div>

        <div className="w-[90%] mx-auto lg:h-[70vh]">
          <video
            autoPlay
            controls
            poster={Thumbnail}
            className="w-full h-full object-fill"
          >
            <source src={videoShow} type="video/mp4" />
          </video>
        </div>
      </div>

      <section id="programs" className="bg-lightYellow pt-1 mt-20 mb-10">
        <div className="mt-10 py-[2px] px-[2px] rounded-full border-[2px] border-darkerBlue lg:w-[22%] w-[90%] mx-auto flex items-center justify-between">
          <Link to="our_programs">
            <Button
              btnText={"Application"}
              btnStyle={
                "border-[2px] rounded-full text-xs border-darkerBlue px-5 py-[2px] bg-transparent"
              }
            />
          </Link>

          <Link to="our_programs">
            <button className="py-[2px] px-2 bg-transparent flex items-center text-xs gap-2">
              <span>Now accepting applications</span>
              <img src={arrowRight} alt="" />
            </button>
          </Link>
        </div>

        <div
          data-aos="fade-up"
          className="lg:mt-20 mt-10 lg:w-[80%] mx-auto text-center font-showcase show-text"
        >
          Kickstart your kids journey by joining the{" "}
          <span className="text-baseOrange">‘Builders Cohort</span>
        </div>

        <div className="w-[90%] lg:w-[80%] lg:my-24 my-16 mx-auto flex lg:flex-row flex-col items-center gap-16">
          <div
            data-aos="fade-right"
            className="lg:w-1/2 rounded-xl bg course course1 relative"
          >
            <img src={codingCourseImage} alt="" />

            <span className="absolute top-0 right-0 bg-mainWhite text-darkerBlue lg:px-7 px-5 lg:py-3 py-2 border-0 rounded-s-full inter-small">
              + Free Course Bonus
            </span>

            <div className="absolute text-mainWhite bottom-0 left-0 p-7">
              <p className="inter-small font-thin">Ongoing</p>
              <h2 className="font-showcase">Introduction to Coding</h2>
              <Button
                btnClick={showEnrollForm}
                btnText={"Enroll Now"}
                btnStyle={"rounded-full bg-baseOrange px-10 py-3"}
              />
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="lg:w-1/2 rounded-xl bg course course1 relative"
          >
            <img src={animationCourseImage} alt="" />
            <span className="absolute top-0 right-0 bg-mainWhite text-darkerBlue lg:px-7 px-5 lg:py-3 py-2 border-0 rounded-s-full inter-small">
              + Free Course Bonus
            </span>
            <div className="absolute text-mainWhite bottom-0 left-0 p-7">
              <p className="inter-small font-thin">Coming Soon</p>
              <h2 className="font-showcase">Animation Studio</h2>
              <Button
                btnClick={showEnrollForm}
                btnText={"Pre- Register"}
                btnStyle={
                  "border-[2px] rounded-full border-baseOrange px-8 py-2 bg-transparent"
                }
              />
            </div>
          </div>
        </div>

        <div className="bg-[#fff]">
          <Pricing atHome={true} />
        </div>

        <div id="about" className="mt-24 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 bg-darkerBlue">
            <div className="lg:w-[80%] w-[90%] mx-auto text-mainWhite py-10 flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h1 data-aos="fade-up-right" className="font-showcase">
                  Who We Are
                </h1>
                <p data-aos="fade-up-right" className="inter-small font-light">
                  <span className="text-baseOrange">Tech Kiddies</span> is
                  empowering kids with 21st century digital skills needed to
                  lead the world. In today’s world, it is important for kids to
                  develop strong digital literacy skills and understand how to
                  navigate the online world safely and responsibly.{" "}
                  <span className="text-baseOrange">Tech Kiddies</span> fills
                  this gap by teaching your kids about technology, internet
                  safety while you watch them build amazing tech projects.
                </p>

                <p data-aos="fade-up-right" className="inter-small font-light">
                  <span className="text-baseOrange">Tech kiddies</span>{" "}
                  Influence : Empowering kids to become future creators and
                  innovators.
                </p>
              </div>

              <div className="relative text-mainWhite">
                <img
                  data-aos="flip-right"
                  src={TrustedImg}
                  alt=""
                  className="w-full"
                />

                <p
                  data-aos="fade-up-right"
                  className="trusted absolute top-5 left-0 font-showcase !text-[40px]"
                >
                  Trusted by:
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="lg:w-[80%] w-[90%] mx-auto py-10 flex flex-col gap-10">
              <div className="py-[2px] px-[2px] rounded-full border-[2px] border-darkerBlue flex items-center w-[300px] justify-between">
                <Button
                  btnText={"About Us"}
                  btnStyle={
                    "border-[2px] text-xs rounded-full border-darkerBlue px-5 py-[2px] bg-transparent"
                  }
                />

                <button className="py-[2px] text-xs px-[2px] bg-transparent flex items-center gap-2">
                  <span>What the kids stand to benefit</span>
                  <img src={arrowRight} alt="" />
                </button>
              </div>

              <div className="flex flex-col gap-10">
                {kidBenefit.map((each) => (
                  <div
                    key={each.id}
                    className="kids-benefit flex items-center gap-3"
                  >
                    <div data-aos="fade-up-right" className="">
                      <div className={xImgStyle}>
                        <img src={each?.img} alt="" className="w-[50%]" />
                      </div>
                    </div>

                    <div data-aos="fade-up-right">
                      <h2 className="font-showcase !text-[25px]">
                        {each.title}
                      </h2>
                      <p className="inter-small -mt-3 font-light">
                        {each.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 bg-mainWhite flex flex-col gap-10">
        <span
          data-aos="flip-right"
          className="w-[200px] mx-auto py-[2px] px-[2px] rounded-full border-[2px] border-darkerBlue flex items-center justify-between"
        >
          <Button
            btnText={"About Us"}
            btnStyle={
              "border-[2px] text-xs rounded-full border-darkerBlue px-5 py-[2px] bg-transparent"
            }
          />

          <button className="py-[2px] text-xs px-[2px] bg-transparent flex items-center gap-2">
            <span>Our Impact</span>
            <img src={arrowRight} alt="" />
          </button>
        </span>

        <h1
          data-aos="fade-up"
          className="font-showcase text-center !text-[25px] !leading-10 w-[80%] mx-auto"
        >
          Our programs are designed to empower students with a range of skills
          and attributes that are essential for success in today’s digital age.
        </h1>

        <div className="w-[80%] mx-auto flex lg:flex-row flex-col my-20">
          <div
            data-aos="flip-down"
            className="bend1 -mt-5 lg:w-1/3 rounded-2xl p-10 shadow-2xl bg-[#E7FFF0] h-[250px]"
          >
            <h1 className="font-showcase !text-[20px] !leading-10">
              Digital Skills Development:
            </h1>
            <ul>
              <li className="list-disc">Digital Literacy</li>
              <li className="list-disc">Critical Thinking</li>
              <li className="list-disc">Collaboration</li>
              <li className="list-disc">Future Readiness</li>
            </ul>
          </div>

          <div className="lg:w-1/3 rounded-2xl p-10 shadow-2xl bg-[#E8EBF9] h-[250px]">
            <h1 className="font-showcase !text-[20px] !leading-10">
              Creative Expression:
            </h1>
            <ul>
              <li className="list-disc">Creativity</li>
              <li className="list-disc">Innovation</li>
              <li className="list-disc">Empowerment</li>
            </ul>
          </div>

          <div
            data-aos="flip-up"
            className="bend2 -mt-5 lg:w-1/3 rounded-2xl p-10 shadow-2xl bg-[#FDE7EC] h-[250px]"
          >
            <h1 className="font-showcase !text-[20px] !leading-9">
              Personal Growth and Social Impact:
            </h1>
            <ul>
              <li className="list-disc">Confidence</li>
              <li className="list-disc">Social Impact</li>
              <li className="list-disc">Lifelong Learning</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <Testimonies />
      </section>

      <section id="contact" className="my-20 py-1">
        <div className="w-[90%] mx-auto bg-[#EFF2FB] h-[400px] rounded-3xl pt-10 flex flex-col gap-5">
          <h1 className="font-showcase text-center show-text">
            We Are Here For You!
          </h1>
          <div
            data-aos="zoom-in"
            className="w-[90%] mx-auto bg-white p-10 shadow-xl flex flex-col gap-5 rounded-3xl"
          >
            <div className="flex items-center justify-center">
              <img src={UserImg} alt="" />
            </div>

            <div>
              <h2 className="font-showcase text-darkerBlue !text-[25px] text-center show-text">
                Email Reached Out
              </h2>

              <p className="text-center inter-small lg:w-[80%] mx-auto">
                For any questions, including tracking your order, please contact
                us via email techkiddiescontact@gmail.com Or you can fill the
                contact form by clicking on the button below.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Button btnText={"Fill Contact Form"} btnClick={openParentForm} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-darkerBlue lg:rounded-t-[4rem] rounded-t-3xl pb-10 md:mt-[15rem] mt-[28rem] lg:h-[400px]">
        <div className="w-[90%] mx-auto py-1">
          <div
            data-aos="zoom-in"
            className="flex lg:flex-row flex-col items-center gap-10 -mt-[100px]"
          >
            <div className="lg:w-1/2 py-10 px-5 bg-[#00A541] text-mainWhite rounded-2xl flex flex-col items-center justify-center gap-5">
              <h2 className="font-shocase !text-[25px]">
                We have amazing courses
              </h2>
              <p>Empowering kids to become future creators and innovators.</p>
              <Link to="our_programs">
                <Button
                  btnText={"Explore Our Program"}
                  btnStyle={
                    "px-5 py-3 rounded-full text-darkerBlue border-0 bg-mainWhite text-xs"
                  }
                />
              </Link>
            </div>
            <div className="lg:w-1/2 py-10 px-5 bg-[#00ABFD] text-mainWhite rounded-2xl flex flex-col items-center justify-center gap-5">
              <h2 className="font-shocase !text-[25px]">
                Join Our Parent Community
              </h2>
              <p>Get Involved in Your Child’s Tech Journey.</p>
              <Button
                btnClick={openParentForm}
                btnText={"Join Our Community"}
                btnStyle={
                  "px-5 py-3 rounded-full text-darkerBlue border-0 bg-mainWhite text-xs"
                }
              />
            </div>
          </div>

          <div>
            <div className="flex lg:flex-row flex-col-reverse lg:items-center justify-between mt-10">
              <div className="lg:w-1/2 newsletter text-mainWhite flex flex-col lg:gap-5 gap-2">
                <p className="font-showcase !leading-8 !text-[27px] ">
                  Subscribe to our Newsletter
                </p>
                <p className="inter-small">
                  Empowering kids to become future creators and innovators.
                </p>
                <Newsletter />
                <p className="text-xs">
                  Designed by{" "}
                  <span className="text-baseOrange">Taofeeqah Bello</span> and
                  Developed by{" "}
                  <a
                    href="https://jamleads.netlify.app/"
                    target="_blank"
                    className="text-baseOrange"
                  >
                    Jamleads
                  </a>
                  , &copy; 2024 Tech Kiddies
                </p>
              </div>

              <div className="lg:w-1/2 flex lg:flex-row flex-col gap-5 lg:justify-between mt-5">
                {footerSubLinks.map((each, index) => (
                  <div key={index} className="text-mainWhite !text-[]">
                    <h1 className="font-showcase !text-2xl">{each.title}</h1>
                    <ul className="flex flex-col gap-3 text-xs">
                      {each.links.map((each, index) => (
                        <li key={index}>
                          <a href={each.link}>{each.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
