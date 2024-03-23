// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  CheckedIcon,
  DiscountImg,
  UserImg,
  arrowRight,
} from "../assets";
import Button from "../components/Button";
import Modal from "../components/Modal";
import ParentForm from "../components/ParentForm";

const Program = () => {
  const [open, setOpen] = useState(false);
  const [parentForm, setParentForm] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showModal = () => {
    setOpen(!open);
  };
  const openParentForm = () => {
    setParentForm(!parentForm);
  };
  return (
    <>
      <div className={`${parentForm ? "" : "hidden"} bg-red-500`}>
        <ParentForm closeModal={openParentForm} />
      </div>
      <div
        onClick={openParentForm}
        className={`${parentForm ? "" : "hidden"} modal-backdrop`}
      ></div>

      <div className={`${open ? "" : "hidden"}`}>
        <Modal closeModal={showModal} />
      </div>
      <div
        onClick={showModal}
        className={`${open ? "" : "hidden"} overflow-y-hidden modal-backdrop`}
      ></div>

      <section className="programShocase lg:h-[60vh] flex items-end justify-end">
        <div className="=flex flex-col gap-10">
          <div className="text-center flex flex-col gap-5 mt-10 show-text2">
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="lg:w-[60%] mx-auto"
            >
              Develop your website in 8 weeks plus a free course!
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="lg:w-[60%] mx-auto"
            >
              Become a confident computer user, master internet basics, and
              excel in digital communication. Tech Kiddies empowers kids with
              the 21st century digital skills to ignite innovation and
              creativity.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="flex items-center justify-center lg:mt-10 mb-10"
          >
            {/* <Link to="our_programs"> */}
            <Button
              btnClick={showModal}
              btnText={"Explore Now"}
              btnStyle={`lg:px-5 px-3 py-3 bg-baseOrange border-0 text-xs inter-regular font-bold rounded-full`}
            />
            {/* </Link> */}

            <Button
              btnText={"Explore other programs"}
              btnStyle={`lg:px-5 px-3 py-3 bg-transparent border-0 underline text-xs inter-regular font-bold`}
            />
          </div>
        </div>
      </section>

      <section className="bg-lightYellow">
        <div className="lg:flex">
          <div className="bg-[#DEE5FF] lg:w-1/2 lg:p-20 px-5 py-10">
            <div className="flex flex-col gap-5">
              <h1 className="font-showcase !text-3xl">About the course</h1>

              <div className="couseProMob flex items-center justify-between inter-small">
                <div className="w-1/3 flex flex-col gap-5">
                  <p data-aos="fade-down-right">Course Duration:</p>
                  <p data-aos="fade-down-right">Class Times:</p>
                  <p data-aos="fade-down-right">Class Times:</p>
                  <p data-aos="fade-down-right">Installments: </p>
                </div>
                <div className="w-2/3 flex flex-col gap-5 font-bold">
                  <p data-aos="fade-down-right">8 weeks</p>
                  <p data-aos="fade-down-right">2 Days dedication a week</p>
                  <p data-aos="fade-down-right">
                    Class Content + Live Virtual Training
                  </p>
                  <p data-aos="fade-down-right">
                    70% on Admission. 30% after 4 weeks
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="rotating-image-container mt-10">
                <img
                  src={DiscountImg}
                  alt=""
                  className="rotating-image w-[70%]"
                />
                <img src={ArrowDown} alt="" className="absolute w-[30%]" />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 lg:p-20 px-5 py-10">
            <div className="">
              <h1 className="font-showcase !text-3xl">Course Details</h1>

              <div className="mt-5">
                <h3>What to learning from scratch :</h3>

                <div className="flex flex-col gap-4 mt-5">
                  {Course.map((each) => (
                    <div
                      key={each.id}
                      className="flex items-center lg:gap-10 gap-5"
                    >
                      <div
                        data-aos="fade-up-right"
                        className="img-qrap lg:w-[35px] lg:h-[35px] w-[40px] h-[40px] bg-mainWhite rounded-full flex items-center justify-center"
                      >
                        <img src={CheckedIcon} alt="" className="w-[50%]" />
                      </div>

                      <p
                        data-aos="fade-up-let"
                        className="font-showcase !text-lg"
                      >
                        {each.course}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h3>The details:</h3>

                <div className="flex flex-col gap-4 mt-5">
                  {Details.map((each) => (
                    <div
                      key={each.id}
                      className="flex items-center lg:gap-10 gap-5"
                    >
                      <div
                        data-aos="fade-up-right"
                        className="img-qrap lg:w-[35px] lg:h-[35px] w-[40px] h-[40px] bg-mainWhite rounded-full flex items-center justify-center"
                      >
                        <img src={CheckedIcon} alt="" className="w-[50%]" />
                      </div>

                      <p
                        data-aos="fade-up-right"
                        className="font-showcase !text-lg"
                      >
                        {each.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="details2 py-20 flex flex-col gap-10" id="courses">
          <h2 className="font-showcase text-center">
            Details of the Free Course
          </h2>

          <div className="lg:px-20 px-5 lg:flex-row flex-col flex gap-5">
            <div className="lg:w-1/2 h-ull bg-[#FFFFFF] rounded-3xl lg:p-20 px-5 py-10">
              <div className="flex flex-col gap-5">
                <h1 className="font-showcase !text-3xl">About the course</h1>

                <div className="couseProMob flex items-center justify-between inter-small mt-5">
                  <div className="w-1/3 flex flex-col gap-5">
                    <p data-aos="fade-down-right">Course Name:</p>
                    <p data-aos="fade-down-right">Course Duration:</p>
                    <p data-aos="fade-down-right">Class Times:</p>
                    <p data-aos="fade-down-right">Class Times:</p>
                  </div>
                  <div className="w-2/3 flex flex-col gap-5 font-bold">
                    <p data-aos="fade-down-right">Tech-savvy star</p>
                    <p data-aos="fade-down-right">3 weeks</p>
                    <p data-aos="fade-down-right">2 Days dedication a week</p>
                    <p data-aos="fade-down-right">
                      Class Content + Live Virtual Training
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 h-ull bg-[#DEE5FF] rounded-3xl lg:p-20 px-5 py-10">
              <div className="">
                <h3 className="font-showcase !text-3xl">Course Details</h3>

                <div className="flex flex-col gap-4 mt-5">
                  {Details2.map((each) => (
                    <div key={each.id} className="flex items-center gap-10">
                      <div
                        data-aos="fade-down-right"
                        className="img-qrap lg:w-[35px] lg:h-[35px] w-[40px] h-[40px] bg-mainWhite rounded-full flex items-center justify-center"
                      >
                        <img src={CheckedIcon} alt="" className="w-[50%]" />
                      </div>

                      <p
                        data-aos="fade-down-right"
                        className="font-showcase !text-base"
                      >
                        {each.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Button btnText={"Enroll Now"} btnClick={showModal} />
          </div>
        </div>
      </section>

      <section className="bg-darkerBlue lg:px-20 py-10 px-5 flex-col flex gap-10">
        <div className="py-[2px] px-[2px] rounded-full border-[2px] border-mainWhite lg:w-[27%] w-[90%] mx-auto flex items-center justify-between">
          <Button
            btnText={"Application"}
            btnStyle={
              "border-[2px] text-mainWhite rounded-full text-xs border-mainWhite px-5 py-[2px] bg-transparent"
            }
          />

          <button className="py-[2px] px-2 text-mainWhite bg-transparent flex items-center text-xs gap-2">
            <span>Now accepting applications</span>
            <img src={arrowRight} alt="" />
          </button>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="700"
          className="border-[2px] text-mainWhite border-baseOrange rounded-lg flex flex-col items-center justify-center gap-5 py-10"
        >
          <p>Comming soon</p>
          <h1 className="font-showcase !text-xl">Animation Studio</h1>
          <p className=" text-center text-xs">
            Get started with the ‘Tech Savvy Starter’ and become a confident
            computer user, master internet basics, and excel in digital
            communication
          </p>

          <Button
            btnStyle={
              "lg:px-5 px-3 py-3 bg-baseOrange border-0 text-xs inter-regular font-bold rounded-full"
            }
            btnText={"Pre- Register"}
            btnClick={showModal}
          />
        </div>
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

      <section className="bg-darkerBlue lg:rounded-t-[6rem] rounded-t-3xl pb-10 mt-[28rem] lg:h-[450px]">
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
              <a href="#courses">
                <Button
                  btnText={"Explore Our Program"}
                  btnStyle={
                    "px-5 py-3 rounded-full text-darkerBlue border-0 bg-mainWhite text-xs"
                  }
                />
              </a>
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
            <div className="flex lg:flex-row flex-col lg:items-center justify-between mt-10">
              <div className="lg:w-1/2 newsletter text-mainWhite flex flex-col lg:gap-5 gap-2">
                <p className="font-showcase !leading-8 !text-[27px] ">
                  Subscribe to our Newsletter
                </p>
                <p className="inter-small">
                  Empowering kids to become future creators and innovators.
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="bg-mainWhite px-4 py-3 rounded-full text-black lg:w-[320px] w-[200px]"
                    placeholder="Email Address"
                  />
                  <Button
                    btnText={"Subscribe"}
                    btnStyle={`bg-baseOrange text-mainWhite text-xs rounded-full lg:px-10 px-5 py-4`}
                  />
                </div>
              </div>

              <div className="lg:w-1/2 flex lg:flex-row flex-col gap-5 lg:justify-between mt-5">
                <div className="text-mainWhite">
                  <h1 className="font-showcase !text-3xl">Company</h1>
                  <ul className="flex flex-col gap-3">
                    <li>About Us</li>
                    <li>Testimonies</li>
                    <li>Contatc Us</li>
                  </ul>
                </div>
                <div className="text-mainWhite !text-[]">
                  <h1 className="font-showcase !text-3xl">Security</h1>
                  <ul className="flex flex-col gap-3">
                    <li>Privacy Policy</li>
                    <li>Terms & Condition</li>
                  </ul>
                </div>
                <div className="text-mainWhite !text-[]">
                  <h1 className="font-showcase !text-3xl">Contact</h1>
                  <ul className="flex flex-col gap-3">
                    <li>+234 8124 574 84</li>
                    <li>hello@techkides.com</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-10 text-mainWhite flex lg:flex-row flex-col-reverse gap-5 items-center justify-between">
              <div className="lg:w-1/2 text-xs">
                <p>
                  Developed by{" "}
                  <a
                    href="https://jamleads.netlify.com/"
                    target="_blank"
                    className="text-baseOrange"
                  >
                    Jamleads
                  </a>
                  , &copy; 2023 Invavest Ltd
                </p>
              </div>

              <div className="lg:w-1/2 grid grid-cols-2 lg:flex items-center gap-5">
                <a
                  href=""
                  className="px-7 py-3 rounded-full border-[1px] border-mianWhite text-mainWhite inter-small"
                >
                  YouTube
                </a>
                <a
                  href=""
                  className="px-7 py-3 rounded-full border-[1px] border-mianWhite text-mainWhite inter-small"
                >
                  Linkedin
                </a>
                <a
                  href=""
                  className="px-7 py-3 rounded-full border-[1px] border-mianWhite text-mainWhite inter-small"
                >
                  Twitter
                </a>
                <a
                  href=""
                  className="px-7 py-3 rounded-full border-[1px] border-mianWhite text-mainWhite inter-small"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Program;

const Course = [
  { id: 1, course: "HTML" },
  { id: 2, course: "CSS" },
  { id: 3, course: "Python" },
  { id: 4, course: "JavaScript bases" },
];
const Details = [
  { id: 1, detail: "Develop website and games" },
  { id: 2, detail: "Solve problems creatively" },
  { id: 3, detail: "Understand technology" },
  { id: 4, detail: "Express creativity" },
  { id: 5, detail: "Adapt to new technologies" },
];
const Details2 = [
  { id: 1, detail: "Introduction to computers" },
  { id: 2, detail: "Internet Basics" },
  { id: 3, detail: "Online Safety and Security" },
  { id: 4, detail: "Ms Word and Powerpoint" },
  { id: 5, detail: "Quizzes and Games" },
  { id: 6, detail: "Certificate of Completion" },
];
