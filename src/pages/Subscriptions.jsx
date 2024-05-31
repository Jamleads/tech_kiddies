import { useEffect, useState } from "react";
import {
  arrowRight,
  MinusCircle,
  PlusCircle,
  SubHeroImage,
  SubVector,
  UserImg,
} from "../assets";
import Button from "../components/Button";
import Pricing from "../components/Pricing";
import { faqData, footerSubLinks, subscriotionCourse } from "../utilities/data";
import Testimonies from "../components/Testimonies";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import ParentForm from "../components/ParentForm";
import Modal from "../components/Modal";

const Subscriptions = () => {
  const [open, setOpen] = useState(null);
  const [formOpen, setFormOpen] = useState(null);
  const [parentForm, setParentForm] = useState(false);

  const shoeFaq = (index) => {
    setOpen(open === index ? null : index);
  };
  const openParentForm = () => {
    setParentForm(!parentForm);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={`${parentForm ? "" : "hidden"} bg-red-500`}>
        <ParentForm closeModal={openParentForm} />
      </div>

      {/* Enroll form  and its overlay*/}
      <div className={`${formOpen ? "" : "hidden"} bg-red-500`}>
        <Modal closeModal={() => setFormOpen(false)} />
      </div>
      <div
        onClick={() => setFormOpen(false)}
        className={`${
          formOpen ? "" : "hidden"
        } overflow-y-hidden modal-backdrop`}
      ></div>

      <section className="md:h-[100vh] h-auto w-full bg-[#FFFAF6] p-1">
        <div className="md:flex items-center justify-between mt-40 md:w-[90%] md:px-0 px-5 mx-auto">
          <div className="md:w-1/2">
            <img src={SubVector} alt="vector" className="subVector" />
            <h1 className="font-showcase !text-[50px] md:text-left text-center">
              Get started with{" "}
              <span className=" text-baseOrange">Tech Kiddies</span> Flexible
              classes
            </h1>
            <p className="inter-small md:w-2/3 text-center">
              You don’t have to worry about your kids busy schedule, get them
              started with our flexible classes!
            </p>
          </div>

          <div className="md:w-1/2 flex items-center justify-center my-10">
            <img src={SubHeroImage} alt="sub-here-image" />
          </div>
        </div>
      </section>

      <section className="w-full pb-20 p-1 bg-[#F8EEE8] flex flex-col gap-10">
        <div className="mt-10 py-[2px] px-[2px] rounded-full md:border-[2px] border-[1px] border-darkerBlue lg:w-[350px] justify-between w-[85%] mx-auto flex items-center">
          <Button
            btnText={"Application"}
            btnStyle={
              "md:border-[2px] border-[1px] rounded-full text-xs border-darkerBlue px-5 py-[2px] bg-transparent"
            }
          />

          <button className="py-[2px] px-2 bg-transparent flex items-center text-xs gap-2">
            <span>Now accepting applications</span>
            <img src={arrowRight} alt="" />
          </button>
        </div>

        <div className="font-showcase !text-[40px] !leading-10 text-center">
          See available courses here
        </div>

        <div className="md:w-[90%] mx-auto md:px-0 flex flex-col gap-5">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 justify-center items-center">
            {subscriotionCourse.slice(0, 3).map((item, index) => (
              <div
                key={index}
                data-aos="flip-left"
                data-aos-duration="1000"
                className={`flex flex-col items-center md:w-[400px] md:h-[400px] w-[350px] h-[350px] justify-center gap-5 rounded-full mx-auto ${item.bgColor}`}
              >
                <div className="bg-[#FBF9FF] rounded-full w-[150px] h-[150px] flex items-center justify-center">
                  <img src={item.icon} alt="" />
                </div>
                <div className=" text-center">
                  <h2 className="!text-2xl font-showcase">{item.title}</h2>
                  <p>{item.detail}</p>
                  <p>{item.subDetails}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="md:w-2/3 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-3">
            {subscriotionCourse.slice(3, 5).map((item, index) => (
              <div
                key={index}
                data-aos="flip-left"
                data-aos-duration="1000"
                className={`flex flex-col items-center md:w-[400px] md:h-[400px] w-[350px] h-[350px] justify-center gap-5 rounded-full mx-auto ${item.bgColor}`}
              >
                <div className="bg-[#FBF9FF] rounded-full w-[150px] h-[150px] flex items-center justify-center">
                  <img src={item.icon} alt="" />
                </div>
                <div className=" text-center">
                  <h2 className="!text-2xl font-showcase">{item.title}</h2>
                  <p>{item.detail}</p>
                  <p>{item.subDetails}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <Pricing btnClick={() => setFormOpen(true)} />
      </section>

      <section>
        <div className="bg-[#EFF2FB]">
          <div className="w-[90%] mx-auto md:flex justify-between py-20">
            <div className="md:w-[45%]">
              <h1 className="font-showcase !text[30px] text-center md:text-start">
                FAQs
              </h1>
              <p className="md:w-[80%] text-center">
                What the parents worry about and how we got them the perfect
                fit. Can’t find the answer you’re looking for? Please chat to{" "}
                <a href="" className="text-baseOrange">
                  our team.
                </a>
              </p>
            </div>

            <div className="md:w-[55%] flex flex-col gap-5">
              {faqData.map((item, index) => (
                <div key={index} className={`p-8 ${open === index ? "" : ""} `}>
                  <div className="flex items-start justify-between gap-10">
                    <p className="font-showcase !text-[18px] !leading-6">
                      <p className=" font-light">{item.title}</p>
                    </p>

                    <img
                      src={open === index ? MinusCircle : PlusCircle}
                      alt=""
                      className="cursor-pointer"
                      onClick={() => shoeFaq(index)}
                    />
                  </div>
                  {open === index && (
                    <p className="font-light text-[20px]">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
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
            <div className="lg:w-1/2 py-10 px-5 bg-[#00A541] text-mainWhite rounded-2xl flex flex-col items-center justify-center gap-5 text-center">
              <h2 className="font-shocase !text-[25px] text-center leading-8">
                We have amazing courses
              </h2>
              <p className="text-center">
                Empowering kids to become future creators and innovators.
              </p>
              <Link to="/our_programs">
                <Button
                  btnText={"Explore Our Programs"}
                  btnStyle={
                    "px-5 py-3 rounded-full text-darkerBlue border-0 bg-mainWhite text-xs"
                  }
                />
              </Link>
            </div>
            <div className="lg:w-1/2 py-10 px-5 bg-[#00ABFD] text-mainWhite rounded-2xl flex flex-col items-center justify-center gap-5">
              <h2 className="font-shocase !text-[25px] text-center leading-8">
                Join Our Parent Community
              </h2>
              <p className="text-center">
                Get Involved in Your Child’s Tech Journey.
              </p>
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
                <t className="designer !text-[10px]">
                  UI design by{" "}
                  <span className="text-baseOrange">Taofeeqah Bello</span>,
                  &copy; 2024 Tech Kiddies
                </t>
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

export default Subscriptions;
